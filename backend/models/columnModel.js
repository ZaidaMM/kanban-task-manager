const mongoose = require('mongoose');

const columnSchema = mongoose.Schema(
  {
    board: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
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
