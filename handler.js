const AWS = require('aws-sdk');

exports.handler2 = async (event, context) => {
  try{
    const ssm = new AWS.SSM({apiVersion: '2014-11-06', region: "us-west-1"});

    // Nombre del parámetro que quieres recuperar
    const parameterName = process.env.myPage
  
    return {
      statusCode: 201,
      body: JSON.stringify({
        messages: parameterName,
      }),
    };
  }
  catch(err){
    return {
      statusCode: 501,
      body: JSON.stringify({
        messageError: JSON.stringify(err.message),
      }),
    };
  }
  // Crea una instancia de AWS.SSM
 
};