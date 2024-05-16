const router = require("express").Router();

const userController = require("../controllers/students");

router.get("/", userController.getAll);

router.get("/:id", userController.getSingle);

router.post("/", userController.createStudent);

router.put("/:id", userController.updateStudent);

router.delete("/:id", userController.deleteStudent);

module.exports = router;
