const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    region : "ap-northeast-2",
    //추후 .env로 보안관리 할것
    accessKeyId: process.env.VUE_APP_AWS_accessKeyId, // 사용자의 AccessKey
    secretAccessKey: process.env.VUE_APP_AWS_secretAccessKey // 사용자의 secretAccessKey
});

exports.createUserDir = async (userId) => {
    const params = {
        Bucket:"vsnovel",
        Key : `User/${userId}/`
    }

    s3.putObject(params)
    .send(err => {
        if (err) {
            throw err;
        }
    });
    
}

exports.deleteUserDir = async (userId) => {
    let params = {
        Bucket: "vsnovel",
        Prefix: `User/${userId}/`
    };

    const listedObjects = await s3.listObjectsV2(params).promise();
    const deleteParams = {
        Bucket: params.Bucket,
        Delete: { Objects: [] }
    };
 
    listedObjects.Contents.forEach(({ Key }) => {
        deleteParams.Delete.Objects.push({ Key });
    });
 
    await s3.deleteObjects(deleteParams).promise(); 
}