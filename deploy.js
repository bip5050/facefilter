/* eslint-env node */
'use strict';
module.exports = function(deployTarget) {
  let ENV = {
    build: {
        localDir: 'build/',
        deleteRemoved: false,
        s3Params: {
          Bucket: $BUCKET_NAME
        },
    },
    s3:{
      accessKeyId: $ACCESS_KEY,
      secretAccessKey: $SECRET_ACCESS_KEY,
      region: $BUCKET_REGION,
      sslEnabled: true,
      Bucket: $BUCKET_NAME
    }
  };

  ENV.build.environment = 'production';

  return ENV;
};