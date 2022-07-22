const express = require('express');
const router = express.Router();

const {
  getBoards,
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard,
} = require('../controllers/boardController');

// const { protectRoute } = require('../middleware/authMiddleware');

// If using protected routes
// router.route('/').get(protectRoute, getTasks).post(protectRoute, createTask);

// Re-route into board routes
const columnRoutes = require('../routes/columnRoutes');
router.use('/:boardId/columns', columnRoutes);

router.route('/').get(getBoards).post(createBoard);

router.route('/:id').get(getBoard).put(updateBoard).delete(deleteBoard);

module.exports = router;
