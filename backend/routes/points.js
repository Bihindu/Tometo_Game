// routes/points.js

const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// GET endpoint to fetch user points
router.get('/', async (req, res) => {
  try {
    const userId = req.user.id; // Assuming user ID is available in req.user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ points: user.points });
  } catch (error) {
    console.error('Error fetching user points:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST endpoint to add points to the user
router.post('/add', async (req, res) => {
  try {
    const userId = req.user.id; // Assuming user ID is available in req.user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.points += req.body.pointsToAdd;
    await user.save();
    res.json({ points: user.points });
  } catch (error) {
    console.error('Error adding points:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
