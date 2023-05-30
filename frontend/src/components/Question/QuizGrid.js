import React, { useState/*, useEffect*/ } from "react";
import { Box } from "@mui/system";
import { shuffle } from "./Shuffle.js"; // Importar la función shuffle
import "../../styles/QuizGrid.css";
//const axios = require("axios");

const QuizGrid = ({ answered, handleAnswer, isCorrect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [Correct, setCorrect] = useState(null);

  const options = [
    { id: 1, text: "Option 1", isCorrect: false },
    { id: 2, text: "Option 2", isCorrect: false },
    { id: 3, text: "Option 3", isCorrect: false },
    { id: 4, text: "Option 4", isCorrect: false },
  ];

  //const randomIndex = Math.floor(Math.random() * options.length);
  const shuffledOptions = shuffle(options); // Opciones mezcladas

  const handleOptionClick = (option) => {
    if (answered) return;
    setSelectedOption(option);
    const isAnswerCorrect = option.isCorrect;
    setCorrect(isAnswerCorrect);
    handleAnswer(isAnswerCorrect);
    const questionsContainer = document.querySelector(".questions-container");
    questionsContainer.classList.add("correct");
    questionsContainer.classList.add("incorrect");
  };

  return (
    <div className={`questions-container ${Correct !== null ? (Correct ? "correct" : "incorrect") : ""}`}>
      <div className="title">What is a</div>
      <div className="quiz-grid-container">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          <div className="quiz-grid">
            {shuffledOptions.map((option) => (
              <div
                key={option.id}
                className={`quiz-cell ${
                  selectedOption !== null && selectedOption.id === option.id
                    ? "selected"
                    : "nonselected"
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.text}
              </div>
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default QuizGrid;
