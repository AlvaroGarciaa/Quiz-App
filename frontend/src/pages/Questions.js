import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Card, Backdrop } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import QuizGrid from "../components/Question/QuizGrid.js";
import QuizScoreboard from "../components/Question/QuizScoreboard.js";
import Timer from "../components/Question/QuizTimer.js";
import "../styles/QuizPage.css";

const Questions = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { numQuestions, quizName, randomquestions } = location.state || {};
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [timer, setTimer] = useState(30);
    const [key, setKey] = useState(0);
    const [counter, setCounter] = useState(30);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const timerIn = setInterval(() => {
            setCounter(prevCounter => prevCounter - 1);
        }, 1000);

        return () => {
            clearInterval(timerIn);
        };
    }, []);

    useEffect(() => {
        if (
            !location.state ||
            !location.state.numQuestions ||
            !location.state.quizName
        ) {
            // Redirect if state is not provided
            navigate("/");
        }
    }, [location.state, navigate]);

    useEffect(() => {
        if (currentQuestion > numQuestions) {
            // Quiz completed

            navigate("/finish", {
                state: {
                    quizName: quizName,
                    score: score,
                    numQuestions: numQuestions,
                    wrongAnswers: wrongAnswers,
                    correctAnswers: correctAnswers,
                    randomquestions: randomquestions
                },
            });
        }
    }, [
        currentQuestion,
        numQuestions,
        navigate,
        score,
        correctAnswers,
        wrongAnswers,
        quizName,
        randomquestions
    ]);

    useEffect(() => {
        setTimer(30);
        setCounter(30);
        setKey(prevKey => prevKey + 1);
    }, [currentQuestion]);

    const handleAnswer = isCorrect => {
        setAnswered(true);
        setOpen(true);
        setIsCorrect(isCorrect);

        if (isCorrect) {
            setScore(score + 100 + counter);
            setCorrectAnswers(correctAnswers + 1);
        } else {
            setWrongAnswers(prevValue => prevValue + 1);
        }
    };

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
        setAnswered(false);
        setIsCorrect(null);
        const questionsContainer = document.querySelector(
            ".questions-container"
        );
        const selectedAnswer = document.querySelector(".quiz-cell");

        selectedAnswer.classList.remove("nonselected");
        questionsContainer.classList.remove("correct");
        questionsContainer.classList.remove("incorrect");
    };

    const handleFinishQuiz = () => {
        navigate("/");
    };

    return (
        <div className="page">
            <div className="exit-container">
                <Button
                    sx={{
                        textTransform: "none",
                        color: "#A3A4AA",
                        fontWeight: 500,
                        fontFamily: "Inter",
                        fontSize: "1rem",
                    }}
                    startIcon={<CloseIcon />}
                    onClick={handleFinishQuiz}
                >
                    Finish quiz
                </Button>
            </div>
            <div className="timer-container">
                <Timer
                    key={key}
                    duration={timer}
                    onComplete={() => {
                        if (!answered) {
                            handleAnswer(false);
                        }
                    }}
                />
            </div>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: theme => theme.zIndex.drawer + 1,
                }}
                open={open}
                onClick={handleClose}
            >
                <Card
                    sx={{
                        maxWidth: 600,
                        borderRadius: 5,
                    }}
                >
                    <CardActionArea>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {isCorrect ? (
                                    <p>Correct answer</p>
                                ) : (
                                    <p>Incorrect answer</p>
                                )}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ fontSize: 18 }}
                            >
                                {
                                    randomquestions[currentQuestion - 1]
                                        .explanation
                                }
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Backdrop>
            ;
            <QuizGrid
                key={key}
                answered={answered}
                handleAnswer={handleAnswer}
                isCorrect={isCorrect}
                item={randomquestions[currentQuestion - 1]}
            />
            <div className="controls-container">
                <div>
                    <QuizScoreboard score={score} name={quizName} />
                </div>
                <div className="button-container">
                    {answered ? (
                        <Button
                            variant="contained"
                            sx={{
                                height: "100%",
                                backgroundColor: "#6137E3",
                                textTransform: "none",
                                fontFamily: "Inter",
                                fontWeight: 700,
                                fontSize: "1.5rem",
                                borderRadius: "1rem",
                            }}
                            onClick={handleNextQuestion}
                        >
                            Next question
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            sx={{
                                height: "100%",
                                backgroundColor: "#6137E3",
                                textTransform: "none",
                                fontFamily: "Inter",
                                fontWeight: 700,
                                fontSize: "1.5rem",
                                borderRadius: "1rem",
                            }}
                            disabled={!answered}
                        >
                            Submit
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Questions;

