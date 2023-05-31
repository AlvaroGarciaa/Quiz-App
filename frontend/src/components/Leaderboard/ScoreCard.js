import React from "react";
import '../../styles/Scorecard.css'


const ScoreCard = ({place, name, score}) => {

    return(
        <div className="scorecard-container">
            <div className="place">
                {place}
            </div>
            <div className="user">
                {name}
            </div>
            <div className="user-score">
                {score}
            </div>
        </div>
    )
}

export default ScoreCard;