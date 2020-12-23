import LoanJS from "loanjs";

export const calculateEMIs = async (amount, totalYrs, interestRate) =>
  await new LoanJS.Loan(
    Number(amount),
    Number(totalYrs) * 12,
    Number(interestRate),
    true
  );
