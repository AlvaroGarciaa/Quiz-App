import React from "react";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import ScoreContainer from "../components/EndQuiz/ScoreContainer";
import UserStats from "../components/EndQuiz/UserStats";

import "../styles/EndQuiz.css";

const EndQuiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const randomquestions= location.state?.randomquestions;
  const quizName = location.state?.score;
  const score = location.state?.score;
  const numQuestions = location?.state?.numQuestions;
  const wrongAnswers = location?.state?.wrongAnswers;
  const correctAnswers = location?.state?.correctAnswers;

  const RetakeQuiz = () => {
    navigate("/quiz", {
      state: {
        numQuestions: numQuestions,
        quizName: quizName,
        randomquestions: randomquestions,
      },
    });
  };
  const GoLeaderboard = () => {
    navigate("/leaderboard");
  };
  const TakeAnotherQuiz = () => {
    navigate("/");
  };

  return (
    <div className="end-quiz">
      <ScoreContainer score={score} />
      <UserStats
        numCorrect={correctAnswers}
        numWrong={wrongAnswers}
        currentQuestion={numQuestions}
      />
      <div className="buttons-container">
        <Button
          variant="contained"
          disableElevation
          sx={{
            background: "#6137E3",
            textTransform: "none",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            fontSize: "1.2rem",
            fontFamily: "Inter",
            fontWeight: 700,
            borderRadius: "0.9rem",
          }}
          onClick={RetakeQuiz}
        >
          Retake quiz
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{
            background: "#FFC107",
            textTransform: "none",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            fontSize: "1.2rem",
            fontFamily: "Inter",
            fontWeight: 700,
            borderRadius: "0.9rem",
          }}
          onClick={GoLeaderboard}
        >
          Leaderboard
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{
            background: "#EE0808",
            textTransform: "none",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            fontSize: "1.2rem",
            fontFamily: "Inter",
            fontWeight: 700,
            borderRadius: "0.9rem",
          }}
          onClick={TakeAnotherQuiz}
        >
          Start another quiz
        </Button>
      </div>
    </div>
  );
};

export default EndQuiz;
