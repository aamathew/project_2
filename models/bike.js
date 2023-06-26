const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

const bikeSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "New Bike",
  },
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  year: {
    type: Number,
    min: 2018,
    max: 2023,
  },
  color: {
    type: String,
    enum: ["Red", "Blue", "Silver", "Black", "White"],
  }}, {collection: 'bikerecords'}
);

module.exports = mongoose.model("Bike", bikeSchema);