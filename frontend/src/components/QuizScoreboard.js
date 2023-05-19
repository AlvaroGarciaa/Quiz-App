import React, { useState, useEffect } from 'react';

const QuizTimer = ({ isAnswered, onTimeout }) => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (isAnswered || seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isAnswered, seconds]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeout();
    }
  }, [seconds, onTimeout]);

  return <div className="quiz-timer">{seconds}</div>;
};

export default QuizTimer;
