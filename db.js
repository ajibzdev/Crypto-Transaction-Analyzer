const mongoose = require("mongoose");

const Transaction = mongoose.Schema({
  timestamp: { type: String, required: true, unique: true },
  transactionType: { type: String, required: true, unique: true },
  token: { type: String, required: true, unique: true },
  amount: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("CSV_Data", Transaction);
