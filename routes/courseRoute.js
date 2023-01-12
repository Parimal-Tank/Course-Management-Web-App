const courseController = require("../controllers/courseController");

const router = require('express').Router();

// router.get('/' , function(req , res){
//     res.render('index');
//   })  

router.post('/addCourse' , courseController.addCourse);
router.get('/allCourses' , courseController.getAllCourse);


router.get('/:id' , courseController.getOneCourse)

router.put('/:id' , courseController.updateCourse);
router.delete('/:id' , courseController.deleteCourse);

module.exports = router;