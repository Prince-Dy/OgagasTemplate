// server/routes/courseRoutes.js
const express = require("express");
const { getCourses, createCourse } = require("../controllers/courseController.js");

const router = express.Router();

router.get('/', getCourses);
router.post('/', createCourse);

module.exports = router;
