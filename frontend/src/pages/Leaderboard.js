import React from "react";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ScoreCard from "../components/Leaderboard/ScoreCard";
import '../styles/Leaderboard.css';

const Leaderboard = () => {

    return(
        <div className="page">
           <div className="return-container">
            <Button
          sx={{
            textTransform: "none",
            color: "#A3A4AA",
            fontWeight: 500,
            fontFamily: "Inter",
            fontSize: "1rem",
          }}
          startIcon={<ArrowBackIosIcon/>}
            >Return</Button>
            </div>
          <div className="container">
            <h1>Leaderboard</h1>
            <ScoreCard/>
            <ScoreCard/>
            <ScoreCard/>
            <ScoreCard/>
            <ScoreCard/>
          </div> 
            
        </div>
    )
};

export default Leaderboard;