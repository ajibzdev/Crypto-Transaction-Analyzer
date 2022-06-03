const fs = require("fs");
const { parse } = require("csv");
const Transaction = require("./db");
// var csv = require("node-csv").createParser();

const csvFilePath = "./data.csv";
const csv = require("csvtojson");

const data = [];
const readData = () => {
  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      console.log(jsonObj);
    });
};

// readData();
module.exports = readData;
