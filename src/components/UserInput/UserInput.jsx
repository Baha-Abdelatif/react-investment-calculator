import "./UserInput.css";

export default function UserInput({ userInput, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <label htmlFor="initialInvestment">Initial Investment</label>
        <input
          type="number"
          name="initialInvestment"
          id="initialInvestment"
          min="0"
          required
          step="100"
          value={userInput.initialInvestment}
          onChange={(e) => handleChange("initialInvestment", e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="annualInvestment">Annual Investment</label>
        <input
          type="number"
          name="annualInvestment"
          id="annualInvestment"
          min="0"
          required
          step="100"
          value={userInput.annualInvestment}
          onChange={(e) => handleChange("annualInvestment", e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="expectedReturn">Expected Return</label>
        <input
          type="number"
          name="expectedReturn"
          id="expectedReturn"
          min="0"
          required
          step="0.1"
          value={userInput.expectedReturn}
          onChange={(e) => handleChange("expectedReturn", e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          name="duration"
          id="duration"
          min="1"
          required
          step="1"
          value={userInput.duration}
          onChange={(e) => handleChange("duration", e.target.value)}
        />
      </div>
    </section>
  );
}
