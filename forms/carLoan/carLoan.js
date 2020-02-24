function carLoanPayment(r, p, n) {
  return (((r/12)*p / (1-Math.pow((1+(r/12)), -n))))}
  
  let amountOfLoan = prompt('Please enter the amount of the loan without any commas (i.e. $25,000 would be entered as 25000):')
  let timeOfLoan = prompt('Please enter the length of time for the loan in months (i.e. 4 years would be entered as 48): ')
  let interestRate = prompt('Please enter the interest rate of the loan in decimal form (i.e. 5% would be entered as .05): ')
  
  let payment = carLoanPayment(interestRate, amountOfLoan, timeOfLoan)
  let fixedPayment = payment.toFixed(2)
  let percentInterest = interestRate*100
  alert(`A car loan for $${amountOfLoan} over ${timeOfLoan} months at ${percentInterest}% interest would have a monthly payment of $${fixedPayment}.`)