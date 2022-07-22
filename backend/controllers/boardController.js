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

module.exports = { getBoards, createBoard };
