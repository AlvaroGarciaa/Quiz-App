import React, { useState } from "react";
import { Box } from "@mui/system";
import { Collapse, Alert , IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../../styles/QuizGrid.css";

const QuizGrid = ({ answered, handleAnswer, isCorrect, item }) => {
  const [open, setOpen] = React.useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [Correct, setCorrect] = useState(null);

  let options = [
    { id: 1, text: item.answers.a, isCorrect: false },
    { id: 2, text: item.answers.b, isCorrect: false },
    { id: 3, text: item.answers.c, isCorrect: false },
    { id: 4, text: item.answers.d, isCorrect: false },
  ];

  if (item.correct_answer === "a") {
    options[0].isCorrect = true;
  } else if (item.correct_answer === "b") {
    options[1].isCorrect = true;
  } else if (item.correct_answer === "c") {
    options[2].isCorrect = true;
  } else {
    options[3].isCorrect = true;
  }

  const handleOptionClick = (option) => {
    if (answered) return;
    setSelectedOption(option);
    const isAnswerCorrect = option.isCorrect;
    setCorrect(isAnswerCorrect);
    handleAnswer(isAnswerCorrect);
    const questionsContainer = document.querySelector(".questions-container");
    const selectedAnswer = document.querySelector(".quiz-cell");
    selectedAnswer.classList.add("nonselected");
    questionsContainer.classList.add("correct");
    questionsContainer.classList.add("incorrect");
  };

  const explanationShow = (option) => {
    return (
      <div>
        <Box sx={{ width: "100%" }}>
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Explanation: {item.explanation}
            </Alert>
          </Collapse>
          <Button
            disabled={open}
            variant="outlined"
            onClick={() => {
              setOpen(true);
            }}
          >
            Re-open
          </Button>
        </Box>
      </div>
    );
  };

  return (
    <div
      className={`questions-container ${
        Correct !== null ? (Correct ? "correct" : "incorrect") : ""
      }`}
    >
      <div className="title">{item.question}</div>
      <div className="quiz-grid-container">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          <div className="quiz-grid">
            {options.map((option) => (
              <div
                key={option.id}
                className={`quiz-cell ${
                  selectedOption !== null && selectedOption.id === option.id
                    ? "selected"
                    : "nonselected"
                }`}
                onClick={() => {
                  handleOptionClick(option);
                  explanationShow(option);
                }}
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
