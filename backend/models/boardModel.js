const mongoose = require('mongoose');

const boardSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a Board Name'],
    },
    // _id: {
    //   type: String,
    //   required: false,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Board', boardSchema);
