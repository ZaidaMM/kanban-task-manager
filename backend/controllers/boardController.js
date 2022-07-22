const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Board = require('../models/boardModel');

// desc:   Get boards
// route:  GET /api/boards
// access: Public (Will be Private when adding user)
const getBoards = asyncHandler(async (req, res) => {
  const boards = await Board.find();
  res.status(200).json(boards);
});

// desc:   Create board
// route:  POST /api/boards
// access: Public (Will be Private when adding user)
const createBoard = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400);
    throw new Error('Please add board name');
  }

  const board = await Board.create({
    name,
  });
  res.status(200).json(board);
});

// desc:   Get board
// route:  GET /api/boards/:id
// access: Public (Will be Private when adding user)
const getBoard = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.id);

  if (!board) {
    res.status(404);
    throw new Error('Board not found');
  }

  res.status(200).json(board);
});

// desc:   Update board
// route:  PUT /api/boards/:id
// access: Public (Will be Private when adding user)
const updateBoard = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.id);

  if (!board) {
    res.status(404);
    throw new Error('Board not found');
  }

  const updatedBoard = await Board.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json(updatedBoard);
});

// desc:   Delete board
// route:  DELETE /api/boards/:id
// access: Public (Will be Private when adding user)
const deleteBoard = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.id);

  if (!board) {
    res.status(404);
    throw new Error('Board not found');
  }

  await board.remove();

  res.status(200).json(`Board ${req.params.id} deleted`);
});

module.exports = { getBoards, createBoard, getBoard, updateBoard, deleteBoard };
