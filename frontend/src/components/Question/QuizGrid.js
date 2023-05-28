import React, { useState } from "react";
import { Box } from "@mui/system";
import { shuffle } from "./Shuffle.js"; // Importar la función shuffle
import "../../styles/QuizGrid.css";

const QuizGrid = ({ answered, handleAnswer, isCorrect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, text: "Option 1", isCorrect: false },
    { id: 2, text: "Option 2", isCorrect: false },
    { id: 3, text: "Option 3", isCorrect: false },
    { id: 4, text: "Option 4", isCorrect: false },
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  options[randomIndex].isCorrect = true;
  const shuffledOptions = shuffle(options); // Opciones mezcladas

  const handleOptionClick = (option) => {
    if (answered) return;
    setSelectedOption(option);
    handleAnswer(option.isCorrect);
  };
  

  return (
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
                selectedOption &&
                selectedOption.id === option.id &&
                (selectedOption.isCorrect ? "correct" : "incorrect")
              }`}              
              onClick={() => handleOptionClick(option)}
            >
              {option.text}
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default QuizGrid;
