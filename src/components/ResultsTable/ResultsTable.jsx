import "./ResultsTable.css";
import { calculateInvestmentResults, formatter } from "../../util/investment";
import { v4 as uuid } from "uuid";

export default function ResultsTable({ userInput }) {
  const calculatedDatas = calculateInvestmentResults(userInput);
  const initialInvestment =
    calculatedDatas[0].valueEndOfYear -
    calculatedDatas[0].interest -
    calculatedDatas[0].annualInvestment;
  const annualData = calculatedDatas.map((data) => {
    const totalInterest =
      data.valueEndOfYear -
      data.annualInvestment * data.year -
      initialInvestment;

    const totalAmountInvested = data.valueEndOfYear - totalInterest;
    return {
      year: data.year,
      valueEndOfYear: data.valueEndOfYear,
      interest: data.interest,
      totalInterest: totalInterest,
      investedCapital: totalAmountInvested,
    };
  });

  return (
    <div className="results">
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map((data) => {
            return (
              <tr key={uuid()}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(data.totalInterest)}</td>
                <td>{formatter.format(data.investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
