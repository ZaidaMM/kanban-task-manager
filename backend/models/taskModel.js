const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    title: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Please add a title'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    subtask: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: [true, 'Please select a status'],
      enum: ['todo', 'doing', 'done'],
      default: 'todo',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Task', taskSchema);
