import React from 'react';

const QuizScoreboard = ({ score }) => {
  return (
    <div className="quiz-scoreboard">
      <div className="scoreboard-icon">
        <span className="scoreboard-text">{score}</span>
      </div>
      <div>Score</div>
    </div>
  );
};

export default QuizScoreboard;
