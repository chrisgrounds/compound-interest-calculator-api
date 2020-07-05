class Calculator {
  constructor(principal, monthlyAmount, interestRate, compoundsPerYear) {
    this.principal = principal;
    this.monthlyAmount = monthlyAmount;
    this.interestRate = interestRate;
    this.compoundsPerYear = compoundsPerYear || 12;
  }
  
  interestOnPrincipal(termLength) {
    return this.principal * Math.pow(1 + this.interestRate / this.compoundsPerYear, this.compoundsPerYear * termLength);
  }
  
  interestOnFutureValueOfASeries(termLength) {
    const paymentPeriodsPerYear = 12;
    const compoundsPerYearEqualsNumberOfPaymentsPerYear = this.compoundsPerYear === paymentPeriodsPerYear;

    if (compoundsPerYearEqualsNumberOfPaymentsPerYear || termLength === 1) {
      const interestRatePerCompound = this.interestRate / this.compoundsPerYear;
      const interestRatePerCompoundPlusOne = 1 + this.interestRate / this.compoundsPerYear;

      return this.monthlyAmount * ((Math.pow(interestRatePerCompoundPlusOne, (this.compoundsPerYear * termLength)) - 1) / interestRatePerCompound) * interestRatePerCompoundPlusOne;
    }

    const rate = ((1 + this.interestRate / this.compoundsPerYear) ** (this.compoundsPerYear / paymentPeriodsPerYear)) - 1;
    const totalNumberOfPayments = paymentPeriodsPerYear * termLength;

    return this.monthlyAmount * (((1 + rate) ** totalNumberOfPayments - 1) / rate);
  }

  calculate(termLength) { 
    return Number((this.interestOnPrincipal(termLength) + this.interestOnFutureValueOfASeries(termLength)).toFixed(2));
  }
}

module.exports = Calculator;
