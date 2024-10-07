// routes/leaderboard.js (backend)
const express = require('express');
const router = express.Router();
const Leaderboard = require('../models/leaderboardModel');
const User = require('../models/userModel')

// Get the top N scores from the leaderboard
router.get('/leaderboard', async (req, res) => {
  try {
    const topScores = await Leaderboard.find()
      .sort({ score: -1 }) // Sort by descending score
      .limit(10); // Get the top 10 scores
    res.json(topScores);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add a new score to the leaderboard
router.post('/leaderboard', async (req, res) => {
  const { userId, score } = req.body;

  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      throw Error('User not found');
  }

    //Create a new leaderboard entry
    const newScore = new Leaderboard({ userId, score });
    await newScore.save();
    
    res.status(201).json({ message: 'Score added to leaderboard' });
  } catch (error) {
    console.error('Error adding score to leaderboard:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;