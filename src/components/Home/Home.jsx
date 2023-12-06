import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let timer;

    if (timeLeft > 0 && !gameOver) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft, gameOver]);

  function handleClick() {
    if (!gameOver) {
      setScore(score + 1);
    }
  }

  function resetGame() {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
  }

  return (
    <div className="home-container">
      <div className="border-top"></div>
      <h1>Welcome to My Portfolio</h1>
      <div className="game-container">
        <h2>Click the Button Game</h2>
        <p>Click the button as many times as you can in 30 seconds!</p>
        <button onClick={handleClick} disabled={gameOver}>
          Click Me!
        </button>
        <p>Score: {score}</p>
        <p>Time Left: {timeLeft} seconds</p>
        {gameOver && (
          <div>
            <p className="game-over-message">Game Over!</p>
            <p>Your final score: {score}</p>
            <button className="play-again-button" onClick={resetGame}>
              Play Again
            </button>
          </div>
        )}
      </div>
      <div className="border-bottom"></div>
    </div>
  );
}

export default Home;