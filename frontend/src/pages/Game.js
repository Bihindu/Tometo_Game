import { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/index.css'

const Home = () => {
  const [tomatoData, setTomatoData] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);



  // connectinon to tomato API
  
    const fetchTomatoData = async () => {
      try {
        const response = await fetch('https://marcconrad.com/uob/tomato/api.php');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTomatoData(data);
        setIsCorrect(false);
      } catch (error) {
        console.error('Error fetching tomato data:', error);
      }

    };

    useEffect(() => {
      fetchTomatoData();
  }, []);

  //timer: written by Ravidu Rathnagala 
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      setGameOver(true);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  //game over
  const GameOverModal = ({ onClose }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2 class="game-over-message" >Game Over</h2>
          <p style={{ color: 'black' }}>Games Won: {score}</p>
          <button onClick={refreshPage}>Close</button>
        </div>
      </div>
    );
  };

// check Answer
const checkAnswer = () => {
  if (!userAnswer.trim()) return;
  
  const correctAnswer = parseInt(tomatoData.solution, 10);
  const userEnteredAnswer = parseInt(userAnswer, 10);

  if (userEnteredAnswer === correctAnswer) {
    setScore(score + 1); // Update score state
    setIsCorrect(true);
    fetchTomatoData(); //Fetch new tomato data after a correct answer
  } else {
    setIsCorrect(false);
  }

  setIsAnswered(true);
};
  //refresh
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="game">
      {tomatoData ? (
        <div>
          <h2>Question:</h2>
          {tomatoData.question.endsWith('.png') || tomatoData.question.endsWith('.jpg') ? (
            <img src={tomatoData.question} alt="Tomato Question" />
          ) : (
            <p>{tomatoData.question}</p>
          )}
          <input
            type="number"
            placeholder="Enter your answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button onClick={checkAnswer}>Check Answer</button> 
          {isAnswered && ( // Only show feedback if the user has answered
            <p className={isCorrect ? 'correct' : 'incorrect'}>
              {isCorrect ? 'Correct! 🎉' : 'Try again!'}
            </p>
          )}
          <p>Games Won: {score}</p>
          <p>Time left: {timeLeft} seconds</p> {/* Display the time left */}
          {gameOver && <GameOverModal onClose={() => setGameOver(false)} />}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};


export default Home;
