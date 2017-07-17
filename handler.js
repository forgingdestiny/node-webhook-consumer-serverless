'use strict';
var crypto = require('crypto');

module.exports.endpoint = (event, context, callback) => {

  var securityHeader = event.headers['x-mbsy-hmac-sha256'];
  const hmac = crypto.createHmac('sha256', process.env.WEBHOOK_TOKEN); 
  hmac.update(event.body);
  const validationToken = hmac.digest('base64');
  if (validationToken == securityHeader){
    // perform any custom logic with event.body here
    // for sake of this post, we'll just log the body.
    console.log(event.body);
    const response = {
      statusCode: 200
    };
    callback(null, response);
  }
  else{
    const response = {
      statusCode: 401,
      body: JSON.stringify({
        error: "Unauthorized request.",
        header: securityHeader,
        body: event.body
      }),
    };
    callback(null, response);
  }
};
