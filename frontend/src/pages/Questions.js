import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {Button} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import QuizGrid from "../components/Question/QuizGrid.js";
import QuizScoreboard from "../components/Question/QuizScoreboard.js";
import Timer from "../components/Question/QuizTimer.js";
import "../styles/QuizPage.css";

const Questions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { numQuestions, quizName,randomquestions } = location.state || {};
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    console.log(randomquestions)
    if (
      !location.state ||
      !location.state.numQuestions ||
      !location.state.quizName
    ) {
      // Redirect if state is not provided
      navigate("/");
    }
  }, [location.state, navigate]);

  useEffect(() => {
    if (currentQuestion > numQuestions) {
      // Quiz completed
      navigate("/");
    }
  }, [currentQuestion, numQuestions, navigate]);
  useEffect(() => {
    setTimer(30);
  }, [currentQuestion]);

  const handleAnswer = (isCorrect) => {
    setAnswered(true);
    setIsCorrect(isCorrect);

    if (isCorrect) {
      setScore(score + 100);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setAnswered(false);
    setIsCorrect(null);
  };

  const handleFinishQuiz = () => {
    navigate("/");
  };

  return (
    <div className="page">
      <div className="exit-container">
        <Button
          sx={{
            textTransform: "none",
            color: "#A3A4AA",
            fontWeight: 500,
            fontFamily: "Inter",
            fontSize: "1rem",
          }}
          startIcon={<CloseIcon />}
          onClick={handleFinishQuiz}
        >
          Finish quiz
        </Button>
      </div>
      <div className="timer-container">
        <Timer
          duration={timer}
          onComplete={() => {
            if (!answered) {
              handleAnswer(false);
            }
          }}
        />
      </div>
        <QuizGrid
          answered={answered}
          handleAnswer={handleAnswer}
          isCorrect={isCorrect}
          //item = {questions[0]}
        />
      <div className="controls-container">
        <div>
          <QuizScoreboard score={score} />
        </div>
        <div className="button-container">
          {answered ? (
            <Button
              variant="contained"
              sx={{
                height: "100%",
                backgroundColor: "#6137E3",
                textTransform: "none",
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "1.5rem",
                borderRadius: "1rem",
              }}
              onClick={handleNextQuestion}
            >
              Next question
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                height: "100%",
                backgroundColor: "#6137E3",
                textTransform: "none",
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "1.5rem",
                borderRadius: "1rem",
              }}
              disabled={!answered}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;