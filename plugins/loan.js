import LoanJS from "loanjs";

export const calculateEMIs = async (amount, totalYrs, interestRate) =>
  await new LoanJS.Loan(amount, totalYrs * 12, interestRate, true);
