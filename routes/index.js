const router = require("express").Router();

router.get("/", (req, res) => {
  //#swagger.tags=['Hello World']
  res.send("Hello, world!");
});

router.use("/students", require("./students"));

router.use("/", require("./swagger"));

module.exports = router;
