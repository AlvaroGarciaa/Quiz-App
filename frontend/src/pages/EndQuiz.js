import React from "react";
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import ScoreContainer from "../components/EndQuiz/ScoreContainer";
import UserStats from "../components/EndQuiz/UserStats";
import '../styles/EndQuiz.css'


const EndQuiz = () => {
    const navigate = useNavigate();
    
      const RetakeQuiz = () => {
        navigate("/quiz");
      };
      const GoLeaderboard = () => {
        navigate("/");
      };
      const TakeAnotherQuiz = () => {
        navigate("/");
      };

    return(
        <div className="end-quiz">
            <ScoreContainer/>
            <UserStats/>
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
                    borderRadius: "0.9rem"
                }}onClick={RetakeQuiz}>Retake quiz</Button>
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
                    borderRadius: "0.9rem"
                }}onClick={GoLeaderboard}>Leaderboard</Button>
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
                    borderRadius: "0.9rem"
                }}onClick={TakeAnotherQuiz}>Start another quiz</Button>
            </div> 
        </div>
    );
};

export default EndQuiz;