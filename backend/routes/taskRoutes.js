const express = require('express');
const router = express.Router();

const { getTasks, createTask } = require('../controllers/taskController');

const { protectRoute } = require('../middleware/authMiddleware');

router.route('/').get(protectRoute, getTasks).post(protectRoute, createTask);

module.exports = router;
