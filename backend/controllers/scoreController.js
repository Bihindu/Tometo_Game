// scoreController.js (Controllers folder)
const User = require('../models/userModel');   

// Add a score
const addScore = async (req, res) => {
    const { score } = req.body;
    
    const token = req.headers.authorization;
  
  try {
    
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const userId = decodedToken.id;

   
    const user = await User.findById(userId);

    
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    
    user.score = score;

    
    await user.save();

    
    res.status(200).json({ message: 'Score saved successfully!' });
  } catch (error) {
    console.error(error);
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired.' });
    }
    
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Get scores for a user
const currentScore = async (req, res) => {
    const token = req.headers.authorization;
  
  try {
    const decodedToken = jwt.verify(token, secretToken);
    const userId = decodedToken.id;
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    
    const score = user.score;
    res.status(200).json({ score: score });
  } catch (error) {
    console.error(error);
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired.' });
    }
    
    res.status(500).json({ message: 'Internal server error.' });
  }
};


module.exports = { addScore, currentScore };