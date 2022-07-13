const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Task = require('../models/taskModel');

// desc:   Get tasks
// route:  GET /api/tasks
// access: Private
const getTasks = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Task Route' });
});

// desc:   Create task
// route:  POST /api/tasks/
// access: Private
const createTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Create Task Route' });
});

module.exports = { getTasks, createTask };
