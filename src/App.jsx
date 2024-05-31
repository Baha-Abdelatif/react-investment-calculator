import { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isDurationValid = userInput.duration >= 1;

  function handleChange(inputId, newValue) {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputId]: +newValue,
      };
    });
  }

  return (
    <>
      <UserInput userInput={userInput} handleChange={handleChange} />
      {isDurationValid ? (
        <ResultsTable userInput={userInput} />
      ) : (
        <p className="center">Please Enter a Valid Duration value.</p>
      )}
    </>
  );
}

export default App;
