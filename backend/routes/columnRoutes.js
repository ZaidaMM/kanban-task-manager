const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  getColumns,
  createColumn,
  getColumn,
  updateColumn,
  deleteColumn,
} = require('../controllers/columnController');

router.route('/').get(getColumns).post(createColumn);

router.route('/:id').get(getColumn).put(updateColumn).delete(deleteColumn);

module.exports = router;
