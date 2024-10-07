import axios from 'axios';

const saveScoreToDatabase = async (score, userAnswer, tomatoData, setScore, setIsCorrect, fetchTomatoData, setIsAnswered, userData) => {
  try {
    const response = await axios.put(`http://localhost:3214/Server/score/${userData.name}`, {
      score: score,
    });
    console.log('Score saved successfully!', response.data);
  } catch (error) {
    console.error('Error saving score:', error);
  }
};

export default saveScoreToDatabase;
