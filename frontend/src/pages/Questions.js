import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Timer from '../components/Question/QuizTimer';

// import '../styles'; // Import the CSS file for styling

const QuizPage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      title: 'Question 1',
      options: [
        { title: 'Option A', isCorrect: true },
        { title: 'Option B', isCorrect: false },
        { title: 'Option C', isCorrect: false },
        { title: 'Option D', isCorrect: false },
      ],
    },
    // Add more questions here...
  ];

  const handleOptionClick = (isCorrect) => {
    setIsAnswered(true);
    setIsCorrect(isCorrect);
    if (isCorrect) {
      const timeRemaining = 30; // Get the remaining time from QuizTimer component
      setScore(score + (timeRemaining * 25));
    }
  };

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setIsAnswered(false);
    setIsCorrect(false);
  };

  const currentQuestion = questions[questionIndex];

  return (
      <Timer duration={30}/>
  );
};

export default QuizPage;
