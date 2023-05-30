  import React, { useState } from "react";
  import { Box } from "@mui/system";
  import { shuffle } from "./Shuffle.js"; // Importar la función shuffle
  import "../../styles/QuizGrid.css";

  const QuizGrid = ({ answered, handleAnswer, isCorrect,item }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [Correct, setCorrect] = useState(null);



    let options = [
      { id: 1, text: item.answers.a, isCorrect: false },
      { id: 2, text: item.answers.b, isCorrect: false },
      { id: 3, text: item.answers.c, isCorrect: false },
      { id: 4, text: item.answers.d, isCorrect: false },
    ];

    if(item.correct_answer === "a"){
      options[0].isCorrect = true;
    }
    else if(item.correct_answer === "b"){
      options[1].isCorrect = true;
    }
    else if(item.correct_answer === "c"){
      options[2].isCorrect = true;
    }
    else{
      options[3].isCorrect = true;
    }

    const randomIndex = Math.floor(Math.random() * options.length);
    options[randomIndex].isCorrect = true;
    const shuffledOptions = shuffle(options); // Opciones mezcladas

    const handleOptionClick = (option) => {
      if (answered) return;
      setSelectedOption(option);
      const isAnswerCorrect = option.isCorrect;
      setCorrect(isAnswerCorrect);
      handleAnswer(isAnswerCorrect);
    };

    return (
    <div className={`questions-container ${Correct !== null ? (Correct ? "correct" : "incorrect") : ""}`}>
      <div className="title">{item.question}</div>
        <div className="quiz-grid-container">
          <Box display="flex" justifyContent="center" alignItems="center" height="100%" width="100%">
            <div className="quiz-grid">
            {shuffledOptions.map((option) => (
              <div
                key={option.id}
                className={`quiz-cell ${selectedOption !== null ? (selectedOption === option ? "selected" : "nonselected"): ""}`}
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
