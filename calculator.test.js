const Calculator = require("./Calculator");

describe("calculateCompoundInterest", () => {
  it("test1", () => {
    const principal = 0;
    const monthly = 400;
    const rate = 0.01;
    const termLength = 1;
    const calculator = new Calculator(principal, monthly, rate);

    expect(calculator.calculate(termLength)).toBe(4826.08);
  });

  it("test2", () => {
    const principal = 5000;
    const monthly = 100;
    const rate = 0.05;
    const termLength = 10;
    const calculator = new Calculator(principal, monthly, rate);

    expect(calculator.calculate(termLength)).toBe(23827.98);
  });

  it("test3", () => {
    const principal = 10000;
    const monthly = 400;
    const rate = 0.08;
    const termLength = 20;
    const calculator = new Calculator(principal, monthly, rate);

    expect(calculator.calculate(termLength)).toBe(286446.92);
  });
});
