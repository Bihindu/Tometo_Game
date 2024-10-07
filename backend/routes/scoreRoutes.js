// Score.js (routes folder)
const express = require('express');

const {addScore, currentScore} = require('../controllers/scoreController');

const router = express();

// Route to add a score
router.post('/add-score', addScore);

// Route to get scores for a user
router.get('/current-score', currentScore);

module.exports = router;