import React, { useState, useEffect } from 'react';

function QuestionPage({ question, answers, onNextQuestion }) {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(countdown);
      handleNextQuestion();
    }

    return () => clearInterval(countdown);
  }, [timer]);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer.correct) {
      setScore((prevScore) => prevScore + 1);
    }

    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    setTimer(30);
    onNextQuestion();
  };

  return (
    <div
      style={{
        background: 'black',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'gray',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <span style={{ fontSize: '24px', color: 'white' }}>{timer}</span>
        </div>
        <h2 style={{ textAlign: 'center' }}>{question}</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '10px',
            marginBottom: '20px',
          }}
        >
          {answers.map((answer, index) => (
            <button
              key={index}
              style={{
                background: 'white',
                border: 'none',
                padding: '10px',
                borderRadius: '5px',
                fontSize: '16px',
              }}
              onClick={() => handleAnswer(answer)}
            >
              {answer.text}
            </button>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '20px',
          }}
        >
          <div style={{ background: 'gray', padding: '10px', borderRadius: '5px' }}>
            Score: {score}
          </div>
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;

