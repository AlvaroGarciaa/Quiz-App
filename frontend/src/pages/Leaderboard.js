import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ScoreCard from "../components/Leaderboard/ScoreCard";
import '../styles/Leaderboard.css';

const Leaderboard = () => {
  const API = process.env.REACT_APP_API;
  const [score, setScore] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/getTop10`);
        if (response.ok) {
          const data = await response.json();
          const slicedData = data.slice(0, 5);
          setScore(slicedData);
        } else {
          throw new Error('Error en la respuesta de la petición GET');
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page">
      <div className="return-container">
        <Button
          sx={{
            textTransform: "none",
            color: "#A3A4AA",
            fontWeight: 500,
            fontFamily: "Inter",
            fontSize: "1rem",
          }}
          startIcon={<ArrowBackIosIcon />}
        >
          Return
        </Button>
      </div>
      <div className="leaderboard-container">
        <h1>Leaderboard</h1>
        {score.map((item, index) => (
          <ScoreCard
            key={index}
            place={index + 1}
            name={item.name}
            score={item.score}
          />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;