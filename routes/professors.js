const router = require("express").Router();

const professorController = require("../controllers/professors");
const validation = require("../middleware/validate");

router.get("/", professorController.getAll);

router.get("/:id", professorController.getSingle);

router.post(
  "/",
  validation.saveProfessorDetails,
  professorController.createProfessor
);

router.put(
  "/:id",
  validation.saveProfessorDetails,
  professorController.updateProfessor
);

router.delete("/:id", professorController.deleteProfessor);

module.exports = router;
