const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

// const { protectRoute } = require('../middleware/authMiddleware');

router.route('/').get(getTasks).post(createTask);

router.route('/:id').get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
