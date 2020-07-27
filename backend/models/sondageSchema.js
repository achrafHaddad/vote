const mongoose = require("mongoose");

const sondageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  choice: String,
  total: { type: Number, default: 0 },
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Sondage", sondageSchema);
