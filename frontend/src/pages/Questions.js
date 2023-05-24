import React, { useState } from 'react';
import {Button} from '@mui/material';
import Timer from '../components/Question/QuizTimer';
import QuizGrid from '../components/Question/QuizGrid';
import '../styles/QuizPage.css'

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
      <div className='page'>
        <div>
          <Button sx={{
            outline: "auto black"
          }}>Exit quiz</Button>
        </div>
        <div className='timer-container'>
          <Timer duration={30}/>
        </div>
        <div className='questions-container'>
          <div className='title'>
            What is a design pattern?
          </div>
          <QuizGrid/>            
        </div>
      </div>
  );
};

export default QuizPage;
