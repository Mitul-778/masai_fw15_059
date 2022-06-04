const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    location: {
      type: { type: String, default: "Point" },
      coordinates: [Number, Number],
    },
    name: { type: String },
  },
  {
    versionKey: false,
  }
);

const Restaurant = mongoose.model('restaurants',restaurantSchema)
module.exports = Restaurant