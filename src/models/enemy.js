const mongoose = require("mongoose");

const EnemySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required",
  },
  description: {
    type: String,
    required: "Description is required",
  },
  category: {
    type: String,
  },
  firstAppearance: {
    type: String,
  },
  photo: {
    type: String,
  },
});

module.exports = mongoose.model("Enemy", EnemySchema);
