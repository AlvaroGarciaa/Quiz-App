import React from 'react';
import { Box } from '@mui/system';
import '../../styles/QuizGrid.css';

function QuizGrid() {
  return (
    <div className="quiz-grid-container">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
      >
        <div className="quiz-grid">
          <div className="quiz-cell">
            Cell 1
          </div>
          <div className="quiz-cell">
            Cell 2
          </div>
          <div className="quiz-cell">
            Cell 3
          </div>
          <div className="quiz-cell">
            Cell 4
          </div>
        </div>
      </Box>
    </div>
  );
}

export default QuizGrid;
