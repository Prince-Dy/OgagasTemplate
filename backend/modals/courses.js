// server/models/Course.js
const mongoose = require('mongoose');


const TierSchema = new mongoose.Schema({
  title: String,
  price: String,
  features: [String],
  zipUrl: String,
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  tiers: [TierSchema],
});

module.exports = mongoose.model('Course', CourseSchema);
