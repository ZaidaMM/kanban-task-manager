const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Task = require('../models/taskModel');
const Column = require('../models/columnModel');
const Board = require('../models/boardModel');

// desc:   Get tasks
// route:  GET /api/tasks
// access: Public (Will be Private when adding user)
const getTasks = asyncHandler(async (req, res) => {
  // If using protected routes, need to get user using id in token

  const boards = await Board.findById(req.params.boardId);

  if (!boards) {
    res.status(401);
    throw new Error('Board not found');
  }

  const column = await Column.findById(req.params.columnId);

  if (!column) {
    res.status(401);
    throw new Error('Column not found');
  }

  const tasks = await Task.find();

  res.status(200).json(tasks);
});

// desc:   Create task
// route:  POST /api/tasks/
// access: Public (Will be Private when adding user)
const createTask = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.boardId);

  if (!board) {
    res.status(401);
    throw new Error('Board not found');
  }

  const column = await Column.findById(req.params.columnId);

  if (!column) {
    res.status(401);
    throw new Error('Column not found');
  }

  const { title, description, status } = req.body;

  //Validation
  if (!title) {
    res.status(400);
    throw new Error('Please add product and description');
  }

  // Find if task already exists
  const taskAlreadyExists = await Task.findOne({ title });
  if (taskAlreadyExists) {
    res.status(400);
    throw new Error('Task already in use');
  }

  const task = await Task.create({
    title,
    description,
    status,
    board: req.params.boardId,
    column: req.params.columnId,
  });

  res.status(200).json(task);
});

// desc:   Get task
// route:  PUT /api/tasks/
// access: Public (Will be Private when adding user)
const getTask = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.boardId);

  if (!board) {
    res.status(401);
    throw new Error('Board not found');
  }

  const column = await Column.findById(req.params.columnId);

  if (!column) {
    res.status(401);
    throw new Error('Column not found');
  }

  const task = await Task.findById(req.params.id);

  //Validation
  if (!task) {
    res.status(400);
    throw new Error('Task not found');
  }

  res.status(200).json(task);
});

// desc:   Update task
// route:  PUT /api/tasks/
// access: Public (Will be Private when adding user)
const updateTask = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.boardId);

  if (!board) {
    res.status(401);
    throw new Error('Board not found');
  }

  const column = await Column.findById(req.params.columnId);

  if (!column) {
    res.status(401);
    throw new Error('Column not found');
  }

  const task = await Task.findById(req.params.id);

  //Validation
  if (!task) {
    res.status(400);
    throw new Error('Task not found');
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json(updatedTask);
});

// desc:   Delete task
// route:  DELETE /api/tasks/
// access: Public (Will be Private when adding user)
const deleteTask = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.boardId);

  if (!board) {
    res.status(401);
    throw new Error('Board not found');
  }

  const column = await Column.findById(req.params.columnId);

  if (!column) {
    res.status(401);
    throw new Error('Column not found');
  }

  const task = await Task.findById(req.params.id);

  //Validation
  if (!task) {
    res.status(400);
    throw new Error('Task not found');
  }

  await task.remove();

  res.status(200).json({ message: 'success' });
});

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
