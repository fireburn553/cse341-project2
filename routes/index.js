const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello, world!");
});

router.use("/students", require("./students"));

module.exports = router;
