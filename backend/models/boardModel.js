const mongoose = require('mongoose');

const boardSchema = mongoose.Schema(
  {
    // id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: [true, 'Please add a Board Name'],
    },
    // _id: {
    //   type: String,
    //   required: false,
    // },
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
