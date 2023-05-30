import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {TextField, Button, StyledEngineProvider, Alert } from '@mui/material';
import '../styles/PatternProPage.css';

function PatternProPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [numQuestions, setNumQuestions] = useState('');
  const [errors, setErrors] = useState({
    name: false,
    questions: false,
    start: false
  });

  const handleNameChange = (e) => {
    const v = e.target.value;
    if (!/^[0-9a-zA-Z]{1,8}$/.test(v)) {
      setErrors({ ...errors, name: true });
    } else {
      setErrors({ ...errors, name: false });
      setName(v);
    }
  };

  const handleNumQuestionsChange = (e) => {
    const v = e.target.value;

    if (!/^(?:[1-9]|10)$/.test(v)) {
      setErrors({ ...errors, questions: true });
    } else {
      setErrors({ ...errors, questions: false });
      setNumQuestions(v);
    }
  };

  const handleStartQuiz = () => {
    if (errors.name || errors.questions || !numQuestions || !name) {
      setErrors({ ...errors, start: true });
    } else {
      let randomquestions = []
      fetch("https://us-central1-tc3005b-a01752067.cloudfunctions.net/get_questions")
      .then(response =>response.json())
      .then(data =>{
        for (let i = 0; i < parseInt(numQuestions); i++) {
          const randomIndex = Math.floor(Math.random() * data.length);
          randomquestions.push(data[randomIndex]);
        }
        navigate('/quiz', {
          state: {
            numQuestions: parseInt(numQuestions),
            quizName: name,
            randomquestions:randomquestions
          }
        });
      })
      
    }
  };

  return (
    <StyledEngineProvider>
      <div className='page-container'>
        <div className='content-container'>
          <h1 className='page-title'>PatternPro</h1>
          <div className='input-container'>
            {errors.start && (
              <Alert severity='error' variant='filled'>
                Wrong information
              </Alert>
            )}
            <TextField
              error={errors.name}
              fullWidth
              variant='outlined'
              label='Name'
              onChange={handleNameChange}
            />

            <TextField
              error={errors.questions}
              fullWidth
              type='number'
              variant='outlined'
              label='Number of questions'
              onChange={handleNumQuestionsChange}
              sx={{
                fontFamily: 'Inter',
                fontWeight: '700'
              }}
            />
          </div>
        </div>
        <div className='button-container'>
          <Button
            onClick={handleStartQuiz}
            variant='contained'
            className='start-button'
            sx={{
              background: '#6137E3',
              textTransform: 'none',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              fontSize: '2.5rem',
              fontFamily: 'Inter',
              fontWeight: 700,
              borderRadius: '0.9rem',
              width: '15%'
            }}
            disableElevation
          >
            Start
          </Button>
        </div>
      </div>
    </StyledEngineProvider>
  );
}

export default PatternProPage;