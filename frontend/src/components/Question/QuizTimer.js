import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import '../../styles/Timer.css'

const QuizTimer = ({ duration, onComplete }) => {
  return (
    <div className="quiz-timer-container">
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        onComplete={onComplete}
        colors={[['#6137E3']]}
        size={200}
        strokeWidth={10}
        trailColor="#f0f0f0"
      >
        {({ remainingTime }) => (
          <div className="quiz-timer">
            <div className="timer">{remainingTime}</div>
          </div>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default QuizTimer;
