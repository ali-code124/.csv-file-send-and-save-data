// models/CsvFile.js

const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/newdb");

// Define the schema for CSV file
const csvFileSchema = new mongoose.Schema({
  filename: String,
  path: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model for CSV file using the schema
const CsvFile = mongoose.model('CsvFile', csvFileSchema);

// Export the model
module.exports = CsvFile;
