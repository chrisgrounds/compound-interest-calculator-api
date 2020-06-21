class Calculator {
  constructor(principal, monthlyAmount, interestRate, termLength) {
    this.principal = principal;
    this.monthlyAmount = monthlyAmount;
    this.interestRate = interestRate;
    this.termLength = termLength;
    this.compoundsPerYear = 12
  }
  
  interestOnPrincipal() {
    const interestRate = 1 + this.interestRate;

    return this.principal * Math.pow(1 + this.interestRate / this.compoundsPerYear, this.compoundsPerYear * this.termLength);
  }
  
  interestOnFutureValueOfASeries() {
    const interestRateByCompounds = this.interestRate / this.compoundsPerYear
    const interestRateOverOneByCompounds = 1 + this.interestRate / this.compoundsPerYear
    
    return this.monthlyAmount * ((Math.pow(interestRateOverOneByCompounds, (this.compoundsPerYear * this.termLength)) - 1) / interestRateByCompounds) * interestRateOverOneByCompounds
  }

  calculate() { 
    return Number((this.interestOnPrincipal() + this.interestOnFutureValueOfASeries()).toFixed(2));
  }
}

module.exports = Calculator;
