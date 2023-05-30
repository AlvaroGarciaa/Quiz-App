import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import ScoreContainer from "../components/EndQuiz/ScoreContainer";
import UserStats from "../components/EndQuiz/UserStats";
import "../styles/EndQuiz.css";

const EndQuiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { numWrong, numCorrect, numQuestions, score } = location.state || {};
  useEffect(() => {
    if (
      !location.state ||
      !location.state.numQuestions ||
      !location.state.numCorrect ||
      !location.state.numWrong ||
      !location.state.score
    ) {
      // Redirect if state is not provided
      navigate("/");
    }
  }, [location.state, navigate]);

  const RetakeQuiz = () => {
    navigate("/quiz");
  };
  const GoLeaderboard = () => {
    navigate("/");
  };
  const TakeAnotherQuiz = () => {
    navigate("/");
  };

  return (
    <div className="end-quiz">
      <ScoreContainer score={score} />
      <UserStats
        numWrong={numWrong}
        currentQuestion={numQuestions}
        numCorrect={numCorrect}
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
