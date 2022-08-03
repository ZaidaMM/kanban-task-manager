const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    board: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Board',
    },
    column: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Column',
    },

    title: {
      type: String,
      required: [true, 'Please add a title'],
      unique: true,
    },
    description: {
      type: String,
    },

    status: {
      type: String,
      required: true,
      default: 'Todo',
      enum: ['Todo', 'Doing', 'Done'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Task', taskSchema);
