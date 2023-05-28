import React from 'react';
import '../../styles/QuizScoreboard.css';

const QuizScoreboard = ({ score, name }) => {
  return (
    <div className='container'>
      <div className='username'>{name}</div>
      <div className='score-container'>
        <p>{score}</p>
      </div>
    </div>
  );
};

export default QuizScoreboard;