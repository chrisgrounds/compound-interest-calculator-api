'use strict';

const Calculator = require("./Calculator");

module.exports.api = async event => {
  const principal = parseInt(event.queryStringParameters.principal);
  const monthly = parseInt(event.queryStringParameters.monthly);
  const rate = parseFloat(event.queryStringParameters.rate);
  const termLength = parseInt(event.queryStringParameters.term);
  
  const calculator = new Calculator(principal, monthly, rate, termLength);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: calculator.calculate(),
        input: event,
      },
      null,
      2
    ),
  };
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
