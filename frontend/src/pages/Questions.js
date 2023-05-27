import React, { useState } from 'react';
import {Button} from '@mui/material';
import Timer from '../components/Question/QuizTimer';
import QuizScoreboard from '../components/Question/QuizScoreboard';
import QuizGrid from '../components/Question/QuizGrid';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/QuizPage.css'

const QuizPage = () => {

  return (
      <div className='page'>
        <div className='exit-container'>
          <Button sx={{
            textTransform: "none",
            color: "#A3A4AA",
            fontWeight: 500,
            fontFamily: "Inter",
            fontSize: "1rem"
          }} 
          startIcon={<CloseIcon/>}>Finish quiz</Button>
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
        <div className='controls-container'>
          <div>
            <QuizScoreboard/>
          </div>
          <div className='button-container'>
            <Button
            variant='contained'
            sx={{
              height: "100%",
              backgroundColor: "#6137E3",
              textTransform: "none",
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "1.5rem",
              borderRadius: "1rem",
            }}>Next question</Button>
          </div>
        </div>
      </div>
  );
};

export default QuizPage;
