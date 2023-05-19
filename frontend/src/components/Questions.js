import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import QuizTimer from './QuizTimer';
import QuizScoreboard from './QuizScoreboard';

import '../styles/QuizPage.css'; // Import the CSS file for styling

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
    <div className="quiz-page">
      <QuizTimer
        isAnswered={isAnswered}
        onTimeout={handleNextQuestion}
      />

      <Button className="exit-button" variant="contained" color="primary">
        Exit
      </Button>

      <Box className={`white-box ${isAnswered && isCorrect ? 'green' : isAnswered ? 'red' : ''}`}>
        <Typography variant="h5" component="h2" className="question-title">
          {currentQuestion.title}
        </Typography>

        {currentQuestion.options.map((option, index) => (
          <Button
            key={index}
            className={`option-button ${isAnswered && option.isCorrect ? 'correct' : ''}`}
            variant="outlined"
            onClick={() => handleOptionClick(option.isCorrect)}
          >
            {option.title}
          </Button>
        ))}
      </Box>

      <QuizScoreboard score={score} />

      <Button
        className="next-button"
        variant="contained"
        color="primary"
        disabled={!isAnswered}
        onClick={handleNextQuestion}
      >
        Next Question
      </Button>
    </div>
  );
};

export default QuizPage;
