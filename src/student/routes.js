const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.get("/fetchStudents/id/:id", controller.getStudentsById);
router.get("/classes/:classgroup", controller.getStudentsByClassGroup);
router.put("/:id", controller.updateStudentNameById);
router.put("/class/:id", controller.updateClassGroupById);
router.delete("/:id", controller.removeStudentById);


module.exports = router;
