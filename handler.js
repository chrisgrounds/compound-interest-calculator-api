'use strict';

const Calculator = require("./Calculator");

module.exports.api = async event => {
  const principal = parseInt(event.queryStringParameters.principal);
  const monthlyAmount = parseInt(event.queryStringParameters.monthlyAmount);
  const interestRate = parseFloat(event.queryStringParameters.interestRate);
  const termLength = parseInt(event.queryStringParameters.termLength);
  
  const calculator = new Calculator(principal, monthlyAmount, interestRate, termLength);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        value: calculator.calculate(),
        input: {
          principal,
          monthlyAmount,
          interestRate,
          termLength,
        },
      },
      null,
      2
    ),
  };
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
