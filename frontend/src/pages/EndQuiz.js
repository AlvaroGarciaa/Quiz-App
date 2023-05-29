import React from "react";
import { Button } from "@mui/material";
import ScoreContainer from "../components/EndQuiz/ScoreContainer";
import UserStats from "../components/EndQuiz/UserStats";
import '../styles/EndQuiz.css'


const EndQuiz = () => {

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
                }}>Retake quiz</Button>
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
                }}>Leaderboard</Button>
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
                }}>Start another quiz</Button>
            </div> 
        </div>
    );
};

export default EndQuiz;