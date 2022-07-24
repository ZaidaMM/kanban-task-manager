const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  getColumns,
  createColumn,
  getColumn,
  updateColumn,
  deleteColumn,
} = require('../controllers/columnController');

// Re-route into column routes
// const taskRoutes = require('../routes/taskRoutes');
// router.use('/:boardId/columns/:columnId/tasks', taskRoutes);

router.route('/').get(getColumns).post(createColumn);

router.route('/:id').get(getColumn).put(updateColumn).delete(deleteColumn);

module.exports = router;
