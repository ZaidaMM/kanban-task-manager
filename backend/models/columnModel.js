const mongoose = require('mongoose');

const columnSchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Board',
    },

    name: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Column', columnSchema);
