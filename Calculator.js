class Calculator {
  constructor(principal, monthlyAmount, interestRate, termLength) {
    this.principal = principal;
    this.monthlyAmount = monthlyAmount;
    this.interestRate = interestRate;
    this.compoundsPerYear = 12
  }
  
  interestOnPrincipal(termLength) {
    return this.principal * Math.pow(1 + this.interestRate / this.compoundsPerYear, this.compoundsPerYear * termLength);
  }
  
  interestOnFutureValueOfASeries(termLength) {
    const interestRateByCompounds = this.interestRate / this.compoundsPerYear
    const interestRateOverOneByCompounds = 1 + this.interestRate / this.compoundsPerYear
    
    return this.monthlyAmount * ((Math.pow(interestRateOverOneByCompounds, (this.compoundsPerYear * termLength)) - 1) / interestRateByCompounds) * interestRateOverOneByCompounds
  }

  calculate(termLength) { 
    return Number((this.interestOnPrincipal(termLength) + this.interestOnFutureValueOfASeries(termLength)).toFixed(2));
  }
}

module.exports = Calculator;
