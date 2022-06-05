const mongoose = require("mongoose");

const neighbourSchema = new mongoose.Schema(
  {
    geometry: {
        coordinates: [[[Number,Number]]]
    },
    name: { type: String },
  },
  {
    versionKey: false,
  }
);

const Neighbour = mongoose.model('neighbourhood',neighbourSchema)
module.exports = Neighbour