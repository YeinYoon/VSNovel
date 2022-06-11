const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    region : "ap-northeast-2",
    //추후 .env로 보안관리 할것
    accessKeyId: 'AKIARKU2Y4IXVCR266PO', // 사용자의 AccessKey
    secretAccessKey: 'YJDi8K4VSP5bPhdNcC6hB/xreuKH2885200KS+LB' // 사용자의 secretAccessKey
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