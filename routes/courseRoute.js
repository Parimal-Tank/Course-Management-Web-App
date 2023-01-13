const courseController = require("../controllers/courseController");

const router = require('express').Router();

router.post('/addCourse' , courseController.addCourse);
router.get('/allCourses' , courseController.getAllCourse);

router.get('/:id' , courseController.getOneCourse)

router.put('/:id' , courseController.updateCourse);
router.delete('/:id' , courseController.deleteCourse);

module.exports = router;