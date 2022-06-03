const readData = require("./readCSV");
const moment = require("moment");
const mongoose = require("mongoose");
const Transaction = require("./db");
require("dotenv").config();

// reading the data to the database
// readData();

//
// colllecting the input from the terminal
const args = process.argv.slice(2);
console.log(args[0]);

let result = [];
const getResult = async () => {
  if (args.length === 0) {
    result = await Transaction.aggregate([
      {
        $set: {},
      },
      { $group: { _id: "$token" } },
    ]);
    console.log(result);
  }
};
getResult();
