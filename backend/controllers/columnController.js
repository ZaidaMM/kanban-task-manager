const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Board = require('../models/boardModel');
const Column = require('../models/columnModel');

// desc:   Get board columns
// route:  GET /api/boards/:boardId/columns
// access: Public (Will be Private when adding user)
const getColumns = asyncHandler(async (req, res) => {
  const boards = await Board.findById(req.params.boardId);

  if (!boards) {
    res.status(401);
    throw new Error('Board not found');
  }

  const columns = await Column.find({ board: req.params.boardId });

  res.status(200).json(columns);
});

// desc:   Create column
// route:  POST /api/boards/:boardId/columns
// access: Public (Will be Private when adding user)
const createColumn = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.boardId);

  if (!board) {
    res.status(401);
    throw new Error('Board not found');
  }

  const { name } = req.body;

  // Validation
  if (!name) {
    res.status(400);
    throw new Error('Please add a column name');
  }

  // Find if column already exists
  const columnAlreadyExists = await Column.findOne({ name });
  if (columnAlreadyExists) {
    res.status(400);
    throw new Error('Column already in use');
  }

  const column = await Column.create({
    name,
    board: board._id,
  });

  await Board.findByIdAndUpdate(
    board._id,
    {
      $push: { columns: column._id },
    },
    {
      new: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json(column);
});

// desc:   Get column
// route:  GET /api/boards/:boardId/columns/:columnId
// access: Public (Will be Private when adding user)
const getColumn = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.boardId);

  if (!board) {
    res.status(401);
    throw new Error('Board not found');
  }

  const column = await Column.findById(req.params.id);

  if (!column) {
    res.status(404);
    throw new Error('Column not found');
  }

  res.status(200).json(column);
});

// desc:   Update column
// route:  PUT /api/boards/:boardId/columns/:columnId
// access: Public (Will be Private when adding user)
const updateColumn = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.boardId);

  if (!board) {
    res.status(401);
    throw new Error('Board not found');
  }

  const column = await Column.findById(req.params.id);

  if (!column) {
    res.status(404);
    throw new Error('Column not found');
  }

  const updatedColumn = await Column.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json(updatedColumn);
});

// desc:   Delete column
// route:  DELETE /api/boards/:boardId/columns/:columnId
// access: Public (Will be Private when adding user)
const deleteColumn = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.boardId);

  if (!board) {
    res.status(401);
    throw new Error('Board not found');
  }

  const column = await Column.findById(req.params.id);

  if (!column) {
    res.status(404);
    throw new Error('Column not found');
  }

  await column.remove();

  res.status(200).json({ message: 'success' });
});

module.exports = {
  getColumns,
  createColumn,
  getColumn,
  updateColumn,
  deleteColumn,
};
