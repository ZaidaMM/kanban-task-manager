const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Board = require('../models/boardModel');
const Column = require('../models/columnModel');

// desc:   Get board columns
// route:  GET /api/boards/:boardId/columns
// access: Public (Will be Private when adding user)
const getColumns = asyncHandler(async (req, res) => {
  const board = Board.findById(req.params.boardId);

  res.status(200).json({ message: 'Get Columns' });
});

// desc:   Create column
// route:  POST /api/boards/:boardId/columns
// access: Public (Will be Private when adding user)
const createColumn = asyncHandler(async (req, res) => {
  const board = Board.findById(req.params.boardId);

  res.status(200).json({ message: 'Column created' });
});

// desc:   Get column
// route:  GET /api/boards/:boardId/columns/:columnId
// access: Public (Will be Private when adding user)
const getColumn = asyncHandler(async (req, res) => {
  const board = Board.findById(req.params.boardId);

  res.status(200).json({ message: 'Get Column' });
});

// desc:   Update column
// route:  POST /api/boards/:boardId/columns/:columnId
// access: Public (Will be Private when adding user)
const updateColumn = asyncHandler(async (req, res) => {
  const board = Board.findById(req.params.boardId);

  res.status(200).json({ message: 'Column updated' });
});

// desc:   Delete column
// route:  DELETE /api/boards/:boardId/columns/:columnId
// access: Public (Will be Private when adding user)
const deleteColumn = asyncHandler(async (req, res) => {
  const board = Board.findById(req.params.boardId);

  res.status(200).json({ message: 'Column deleted' });
});

module.exports = {
  getColumns,
  createColumn,
  getColumn,
  updateColumn,
  deleteColumn,
};
