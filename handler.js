'use strict';

const Calculator = require("./Calculator");

module.exports.api = async event => {
  const principal = parseInt(event.queryStringParameters.principal);
  const monthlyAmount = parseInt(event.queryStringParameters.monthlyAmount);
  const interestRate = parseFloat(event.queryStringParameters.interestRate);
  const termLength = parseInt(event.queryStringParameters.termLength);
  const compoundsPerYear = parseInt(event.queryStringParameters.compoundsPerYear);
  
  const calculator = new Calculator(principal, monthlyAmount, interestRate, compoundsPerYear);

  const history =
    [...Array(termLength - 1).keys()]
      .map(i => ({ year: i + 1, value: calculator.calculate(i + 1) }));

  const value = calculator.calculate(termLength);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(
      {
        value,
        history,
        input: {
          principal,
          monthlyAmount,
          interestRate,
          termLength,
          compoundsPerYear
        },
      },
      null,
      2
    ),
  };
};
