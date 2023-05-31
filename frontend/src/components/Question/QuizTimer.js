import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import '../../styles/Timer.css';

const QuizTimer = ({ duration, onComplete }) => {
  return (
    <div className='quiz-timer-container'>
      <div className='quiz-timer'>
        <CountdownCircleTimer
          isPlaying
          duration={duration}
          onComplete={onComplete}
          colors={[['#6137E3']]}
          size={100}
          strokeWidth={10}
          trailColor='none'
        >
          {({ remainingTime }) => <div className='timer'>{remainingTime}</div>}
        </CountdownCircleTimer>
        <svg className='progress-ring' width='100%' height='100%'>
          <circle className='progress-ring-background' r='95' cx='100' cy='100' />
        </svg>
      </div>
    </div>
  );
};

export default QuizTimer;
