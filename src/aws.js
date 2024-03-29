const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    region : "ap-northeast-2",
    //추후 .env로 보안관리 할것
    accessKeyId: process.env.VUE_APP_AWS_accessKeyId, // 사용자의 AccessKey
    secretAccessKey: process.env.VUE_APP_AWS_secretAccessKey // 사용자의 secretAccessKey
});

exports.getUserProfileImg = async (userId) => {
    const existParams = {
        Bucket:"vsnovel",
        Key : `User/${userId}/profile.png`,
    }

    const exists = await s3
    .headObject(existParams)
    .promise()
    .then(
      () => true,
      err => {
        if (err.code === 'NotFound') {
          return false;
        }
        throw err;
      }
    );

    const params = {
        Bucket:"vsnovel",
        Key : `User/${userId}/profile.png`,
        Expires: 604800
    }   
    
    if(exists == false) {
        return 'none'
    } else {
        return s3.getSignedUrl('getObject', params);
    }

}


exports.uploadProfileImg = (userId, file) =>{
    const params = {
        Bucket: "vsnovel",
        Key : `User/${userId}/profile.png`, // 저장되는 파일의 경로 및 이름
        Body : file // 파일
    }

    var data = new Promise((resolve, reject)=>{
      s3.upload(params)
      .on("httpUploadProgress", evt => {
          return parseInt((evt.loaded * 100) / evt.total) + "%";
      })
      .send((err, data)=>{
          if(err) {
              console.log("파일 업로드 실패");
              console.error(err);
              reject(err)
          } else {
              console.log("파일 업로드 성공", data);
              resolve("ok");
          }
      })
    })
  return data
}



exports.getVN = async (filePath) => { //단일 JSON 파일 가져오기
    const params = {
        Bucket: "vsnovel",
        Key : filePath,
    }

    var result = (async () => {
        try {
            var data;
            data = await s3.getObject(params).promise()
            .then((data)=>{
                return data.Body
            })
        } catch (err) {
            console.log(err);
            return "err"
        }
        return data
    })();
    
    return result;
}


exports.getEpList = async(filePath) => { // 특정 경로의 파일 URL 리스트 가져오기
    const params = {
        Bucket: "vsnovel",
        Prefix : filePath,
    }

    let keyList = [];
    let urlList = [];

    var data = new Promise(function(resolve, reject){
        s3.listObjectsV2(params, async(err, data) => {
            if (err) { 
                return reject(err);
            }

            var reqPath = filePath.split('/');
            reqPath.splice(-1,1);

            let contents = data.Contents;
            contents.forEach((content) => {
                keyList.push(content.Key); // "ex) content.Key => assets/images/1.png"
                
                var filePath = content.Key.split('/'); // 이름
                if(filePath[filePath.length-1] == "") {
                    filePath.splice(-1,1);
                }

                var temp = filePath[filePath.length-1]; // 확장자
                var extension = temp.split('.'); // 확장자
                

                if(reqPath.length+1 == filePath.length) {

                    if(extension.length != 1) { //확장자가 없다면 폴더
                        urlList.push({
                            key : content.Key,
                            name: filePath[filePath.length-1],
                            ex : extension[extension.length-1],
                            url : null
                        });
                    }
                }
            });

            if(keyList[0] == filePath) {
                keyList.splice(0,1);
            }
            for(var i=0; i<urlList.length; i++) {
                const params = {
                    Bucket: "vsnovel",
                    Key : keyList[i],
                    Expires: 604800 // URL 발급 유효기간 7일
                }
                var url = await s3.getSignedUrl("getObject", params);
                urlList[i].url = url;
            }
            
            resolve(urlList);
        });
    });
      
    return data;
}






//배너 관련
exports.uploadBannerImg = (file) =>{
    const params = {
        Bucket: "vsnovel",
        Key : `Main/Banner/${file.name}`, // 저장되는 파일의 경로 및 이름
        Body : file // 파일
    }
    console.log(params)
    var data = new Promise((resolve, reject)=>{
      s3.upload(params)
      .on("httpUploadProgress", evt => {
          return parseInt((evt.loaded * 100) / evt.total) + "%";
      })
      .send((err, data)=>{
          if(err) {
              console.log("파일 업로드 실패");
              console.error(err);
              reject(err)
          } else {
              console.log("파일 업로드 성공", data);
              resolve("ok");
          }
      })
    })
  return data
}


exports.getBannerUrlList = () => {

    var filePath = "Main/Banner/"
    const params = {
        Bucket: "vsnovel",
        Prefix : filePath,
    }

    let keyList = [];
    let urlList = [];

    var data = new Promise(function(resolve, reject){
        s3.listObjectsV2(params, async(err, data) => {
            if (err) { 
                return reject(err);
            }

            var reqPath = filePath.split('/');
            reqPath.splice(-1,1);

            let contents = data.Contents;
            contents.forEach((content) => {
                keyList.push(content.Key); // "ex) content.Key => assets/images/1.png"
                
                var filePath = content.Key.split('/'); // 이름
                if(filePath[filePath.length-1] == "") {
                    filePath.splice(-1,1);
                }

                var temp = filePath[filePath.length-1]; // 확장자
                var extension = temp.split('.'); // 확장자
                

                if(reqPath.length+1 == filePath.length) {

                    if(extension.length == 1) { //확장자가 없다면 폴더
                        urlList.push({
                            key : content.Key,
                            name: filePath[filePath.length-1],
                            ex : 'dir',
                            url : null
                        });
                    } else {
                        urlList.push({
                            key : content.Key,
                            name: filePath[filePath.length-1],
                            ex : extension[extension.length-1],
                            url : null
                        });
                    }

                }
                
            });

            if(keyList[0] == filePath) {
                keyList.splice(0,1);
            }
            for(var i=0; i<urlList.length; i++) {
                const params = {
                    Bucket: "vsnovel",
                    Key : keyList[i],
                    Expires: 604800 // URL 발급 유효기간 7일
                }
                var url = await s3.getSignedUrl("getObject", params);
                urlList[i].url = url;
            }
            
            resolve(urlList);
        });
    });
      
    return data;
}

// viewer


exports.getVN = async (filePath) => { //단일 JSON 파일 가져오기
    const params = {
        Bucket: "vsnovel",
        Key : filePath,
    }

    var result = (async () => {
        try {
            var data;
            data = await s3.getObject(params).promise()
            .then((data)=>{
                return data.Body
            })
        } catch (err) {
            console.log(err);
            return "err"
        }
        return data
    })();
    
    return result;
}



exports.getUrl = async (filePath) => { // 특정 경로의 파일 URL 가져오기 (단일)
    const params = {
        Bucket: "vsnovel",
        Key : filePath,
        Expires: 604800
    }

    var url = new Promise((resolve, reject) => {
        s3.getSignedUrl("getObject", params, function(err, url) {
         if (err) return reject(err);
         resolve(url);
        });
    });
    return url;
}