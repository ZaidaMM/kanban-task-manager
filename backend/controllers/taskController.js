const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Task = require('../models/taskModel');

// desc:   Get tasks
// route:  GET /api/tasks
// access: Public (Will be Private when adding user)
const getTasks = asyncHandler(async (req, res) => {
  // If using protected routes, need to get user using id in token

  const tasks = await Task.find();

  res.status(200).json(tasks);
});

// desc:   Create task
// route:  POST /api/tasks/
// access: Public (Will be Private when adding user)
const createTask = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  //Validation
  if (!title || !description) {
    res.status(400);
    throw new Error('Please add product and description');
  }

  const task = await Task.create({
    title,
    description,
    status: 'todo',
  });

  res.status(200).json(task);
});

module.exports = { getTasks, createTask };
