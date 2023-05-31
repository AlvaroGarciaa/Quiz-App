import React, { useEffect,  } from "react";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import ScoreContainer from "../components/EndQuiz/ScoreContainer";
import UserStats from "../components/EndQuiz/UserStats";

import "../styles/EndQuiz.css";

const EndQuiz = () => {
  const API = process.env.REACT_APP_API;
  const navigate = useNavigate();
  const location = useLocation();
const randomquestions= location.state?.randomquestions;
const quizName = location.state?.quizName;
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
    })};
  const GoLeaderboard = () => {
    navigate("/leaderboard");
  };
  const TakeAnotherQuiz = () => {
    navigate("/");
  };

  useEffect(() => {
    const postScore = async () => {
      try {
        const parsedScore = parseInt(score);
        if (!isNaN(parsedScore)) {
          const response = await fetch(
            `${API}/new_score`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name: quizName, score: parsedScore }),
            }
          );
          if (response.ok) {
            // Lógica adicional si es necesario
          } else {
            throw new Error("Error en la respuesta de la petición POST");
          }
        } else {
          throw new Error("El valor del score no es un número válido");
        }
      } catch (error) {
        console.error("Error al enviar los datos:", error);
      }
    };

    postScore();
  }, []);

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
