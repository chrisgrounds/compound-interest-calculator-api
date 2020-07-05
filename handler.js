'use strict';

const md5 = require("md5");

const Calculator = require("./Calculator");

let inMemoryCache = {};

module.exports.api = async event => {
  try {
    const principal = parseInt(event.queryStringParameters.principal);
    const monthlyAmount = parseInt(event.queryStringParameters.monthlyAmount);
    const interestRate = parseFloat(event.queryStringParameters.interestRate);
    const termLength = parseInt(event.queryStringParameters.termLength);
    const compoundsPerYear = parseInt(event.queryStringParameters.compoundsPerYear);

    const hashedParams = md5(`${principal}${monthlyAmount}${interestRate}${termLength}${compoundsPerYear}`);

    const cacheHit = inMemoryCache[hashedParams];

    let calculationResult;

    if (cacheHit) {
      calculationResult = {
        cache: "hit",
        value: cacheHit.value,
        history: cacheHit.history,
      }
    } else {
      const calculator = new Calculator(principal, monthlyAmount, interestRate, compoundsPerYear);

      const history =
        [...Array(termLength - 1).keys()]
          .map(i => ({ year: i + 1, value: calculator.calculate(i + 1) }));

      const value = calculator.calculate(termLength);

      inMemoryCache[hashedParams] = { value, history };

      calculationResult = {
        cache: "miss",
        value: value,
        history: history,
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify(
        {
          ...calculationResult,
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
  } catch (error) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({
        msg: `${error}`
      }),
    }
  }
};
