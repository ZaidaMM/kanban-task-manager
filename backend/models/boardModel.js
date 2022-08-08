const mongoose = require('mongoose');

const boardSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a Board Name'],
    },

    columns: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Column',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Board', boardSchema);
