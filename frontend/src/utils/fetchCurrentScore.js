import axios from 'axios';

const fetchCurrentScore = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('Token not found');
    return null;
  }

  try {
    const response = await axios.get('/api/current-score', {
      headers: {
        Authorization: token,
      },
    });
    return response.data.score;
  } catch (error) {
    console.error('Error fetching score:', error);
    return null;
  }
};

export default fetchCurrentScore;
