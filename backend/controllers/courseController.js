// server/controllers/courseController.js
const Course = require('../modals/courses');

const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

const createCourse = async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.status(201).json(course);
};

module.exports = {
  getCourses,
  createCourse
};
