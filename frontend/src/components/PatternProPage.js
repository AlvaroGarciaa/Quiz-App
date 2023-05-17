import React, { useState } from "react";
import ReactDOM from "react-dom";
import Question from "./Questions.js";
import "../styles/PatternProPage.css"; // Import the CSS file

function PatternProPage() {
  const [name, setName] = useState("");
  const [numQuestions, setNumQuestions] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumQuestionsChange = (e) => {
    setNumQuestions(e.target.value);
  };

  const handleNextPage = () => {
    ReactDOM.render(<Question />, document.getElementById("root"));
  };

  return (
    <div className="page-container">
      {" "}
      {/* Use class name */}
      <div className="content-container">
        {" "}
        {/* Use class name */}
        <h1 className="page-title">PatternPro</h1> {/* Use class name */}
        <input
          class="input-container"
          type="text"
          value={name}
          placeholder="Name"
          required={true}
          onChange={handleNameChange}
        />
        <div>
          <input
            class="input-container"
            type="number"
            value={numQuestions}
            onChange={handleNumQuestionsChange}
            placeholder="Number of Questions"
            required={true}
          />
        </div>
      </div>
      <button className="next-button" onClick={handleNextPage}>
        Start
      </button>
    </div>
  );
}

export default PatternProPage;
