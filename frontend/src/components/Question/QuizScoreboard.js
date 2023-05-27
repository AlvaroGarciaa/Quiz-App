import React from "react";
import '../../styles/QuizScoreboard.css';

const QuizScoreboard = () => {

    return(
        <div className="container">
            <div className="username">
                Username
            </div>
            <div className="score-container">
                <p>0000</p>
            </div>
        </div>
    );
}

export default QuizScoreboard;