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


    // https://www.thecalculatorsite.com/articles/finance/compound-interest-formula.php
    // Important note: this compound interest formula for different periodic payments only works if the number of compounds per year is equal to or greater than the number of contributions per year. For more information about what to do when the payment period doesn't match the compound period, see this useful page from Jon Wittwer: https://www.vertex42.com/Calculators/compound-interest-calculator.html#rate-per-period
    const rate = ((1 + this.interestRate / this.compoundsPerYear) ** (this.compoundsPerYear / paymentPeriodsPerYear)) - 1;
    const totalNumberOfPayments = paymentPeriodsPerYear * termLength;

    return this.monthlyAmount * (((1 + rate) ** totalNumberOfPayments - 1) / rate);
  }

  calculate(termLength) { 
    return Number((this.interestOnPrincipal(termLength) + this.interestOnFutureValueOfASeries(termLength)).toFixed(2));
  }
}

module.exports = Calculator;
