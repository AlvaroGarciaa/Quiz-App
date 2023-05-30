import React from "react";
import '../../styles/ScoreContainer.css'

const ScoreContainer = ({score}) => {

    return(
        <div className="score-display">
            <p className="score">{score}</p>
        </div>
    );
};

export default ScoreContainer;