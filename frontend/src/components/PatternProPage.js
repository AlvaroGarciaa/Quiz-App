import React, { useState } from "react";
import {useNavigate} from 'react-router';
import { TextField, Button, StyledEngineProvider, Alert } from "@mui/material";
import "../styles/PatternProPage.css"; // Import the CSS file

function PatternProPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    questions: false,
    start: false
  })

  const handleNameChange = (e) => {
    const v = e.target.value
    if(!/^[0-9a-zA-Z]{1,8}$/.test(v))
      setErrors({...errors, name: true})
    else
      setErrors({...errors, name: false})
      setName(v);
  };

  const handleNumQuestionsChange = (e) => {
    const v = e.target.value

    if(!/^(?:[1-9]|10)$/.test(v))
      setErrors({...errors, questions: true})
    else
    setErrors({...errors, questions: false})
    setNumQuestions(v);
  };

  return (
   <StyledEngineProvider>
    <div className="page-container">
        {/* Use class name */}
        <div className="content-container">
          {/* Use class name */}
          <h1 className="page-title">PatternPro</h1> {/* Use class name */}
          <div className="input-container">
            {errors.start ? (
              <Alert severity="error" variant="filled">Wrong information</Alert>
            ) : null}
            <TextField
            error = {errors.name}
            fullWidth
            variant="outlined"
            label="Name"
            onChange={handleNameChange}/>

            <TextField
            error = {errors.questions}
            fullWidth
            type="number"
            variant="outlined"
            label="Number of questions"
            onChange={handleNumQuestionsChange}
            sx={{
              fontFamily: 'Inter',
              fontWeight: "700"
            }}/> 
            </div> 
        </div>
        <div className="button-container">
          <Button
          onClick={() => {
            if(errors.name && errors.questions)
              setErrors({...errors, start: true})
            else
              navigate("/quiz ")
          }}
          variant="contained"
          className="start-button"
          sx={{
            background: "#6137E3",
            textTransform: "none",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            fontSize: "2.5rem",
            fontFamily: "Inter",
            fontWeight: 700,
            borderRadius: "0.9rem",
            width: "15%"

          }}
          disableElevation
          >Start</Button>
        </div>
    </div>
    </StyledEngineProvider>
  );
}

export default PatternProPage;
