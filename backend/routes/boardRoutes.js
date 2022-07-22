const express = require('express');
const router = express.Router();

const { getBoards, createBoard } = require('../controllers/boardController');

// const { protectRoute } = require('../middleware/authMiddleware');

// If using protected routes
// router.route('/').get(protectRoute, getTasks).post(protectRoute, createTask);

router.route('/').get(getBoards).post(createBoard);

module.exports = router;
