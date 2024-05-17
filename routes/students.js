const router = require("express").Router();

const userController = require("../controllers/students");
const validation = require("../middleware/validate");

router.get("/", userController.getAll);

router.get("/:id", userController.getSingle);

router.post("/", validation.saveContact, userController.createStudent);

router.put("/:id", validation.saveContact, userController.updateStudent);

router.delete("/:id", userController.deleteStudent);

module.exports = router;
