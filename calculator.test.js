const Calculator = require("./Calculator");

describe("calculateCompoundInterest", () => {
  test("when compounding at default rate, with 400/m and a 1% rate, returns 4826.08", () => {
    const principal = 0;
    const monthly = 400;
    const rate = 0.01;
    const termLength = 1;
    const calculator = new Calculator(principal, monthly, rate);

    expect(calculator.calculate(termLength)).toBe(4826.08);
  });

  test("when compounding monthly, with 400/m and a 1% rate, returns 4826.08", () => {
    const principal = 0;
    const monthly = 400;
    const rate = 0.01;
    const termLength = 1;
    const compoundsPerYear = 12;
    const calculator = new Calculator(principal, monthly, rate, compoundsPerYear);

    expect(calculator.calculate(termLength)).toBe(4826.08);
  });

  test("when compounding yearly, with 0/m and a 10% rate and 1000 upfront, returns 1100", () => {
    const principal = 1000;
    const monthly = 0;
    const rate = 0.10;
    const termLength = 1;
    const compoundsPerYear = 1;
    const calculator = new Calculator(principal, monthly, rate, compoundsPerYear);

    expect(calculator.calculate(termLength)).toBe(1100);
  });

  test("when compounding yearly, with 400/m and a 10% rate, returns 440", () => {
    const principal = 0;
    const monthly = 400;
    const rate = 0.10;
    const termLength = 1;
    const compoundsPerYear = 1;
    const calculator = new Calculator(principal, monthly, rate, compoundsPerYear);

    expect(calculator.calculate(termLength)).toBe(440);
  });
  
  test("when compounding yearly, with 400/m and a 10% rate with a 10 year term length, returns 5056.21", () => {
    const principal = 0;
    const monthly = 400;
    const rate = 0.10;
    const termLength = 10;
    const compoundsPerYear = 1;
    const calculator = new Calculator(principal, monthly, rate, compoundsPerYear);

    expect(calculator.calculate(termLength)).toBe(80583.04); //(5056.21);
  });

  test("when compounding at default rate, with 100/m and a 5% rate with 5000 upfront, returns 23827.98", () => {
    const principal = 5000;
    const monthly = 100;
    const rate = 0.05;
    const termLength = 10;
    const calculator = new Calculator(principal, monthly, rate);

    expect(calculator.calculate(termLength)).toBe(23827.98);
  });

  test("when compounding at default rate, with 400/m and a 8% rate with 10000 upfront, returns 286446.92", () => {
    const principal = 10000;
    const monthly = 400;
    const rate = 0.08;
    const termLength = 20;
    const calculator = new Calculator(principal, monthly, rate);

    expect(calculator.calculate(termLength)).toBe(286446.92);
  });
});
