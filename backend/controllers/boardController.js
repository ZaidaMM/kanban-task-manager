const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Board = require('../models/boardModel');
const Column = require('../models/columnModel');

// desc:   Get boards
// route:  GET /api/boards
// access: Public (Will be Private when adding user)
const getBoards = asyncHandler(async (req, res) => {
  const boards = await Board.find().populate({
    name: {
      populate: {
        name: 'name',
        path: 'boards',
        model: 'Column',
      },
    },
    path: 'columns',
  });

  res.status(200).json(boards);
  console.log(boards.columns);
});

// desc:   Create board
// route:  POST /api/boards
// access: Public (Will be Private when adding user)
const createBoard = asyncHandler(async (req, res) => {
  const { name, columns } = req.body;

  if (!name) {
    res.status(400);
    throw new Error('Please add board name');
  }

  let payload = { name };
  if (columns) {
    payload.columns = columns.map((colName) => {
      return new Column({
        name: colName,
      });
    });
  }

  const board = await Board.create(payload);
  res.status(200).json(board);
});

// desc:   Get board
// route:  GET /api/boards/:id
// access: Public (Will be Private when adding user)
const getBoard = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.id).populate({
    path: 'columns',
    name: 'name',
  });

  if (!board) {
    res.status(404);
    throw new Error('Board not found');
  }

  res.status(200).json(board);
  console.log(board.columns);
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
