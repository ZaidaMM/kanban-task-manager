const express = require('express');
const router = express.Router();

const { getTasks, createTask } = require('../controllers/taskController');

// const { protectRoute } = require('../middleware/authMiddleware');

// If using protected routes
// router.route('/').get(protectRoute, getTasks).post(protectRoute, createTask);

router.route('/').get(getTasks).post(createTask);

module.exports = router;
