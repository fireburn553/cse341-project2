const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  //#swagger.tags=['Users']
  const result = await mongodb.getDatabase().db().collection("students").find();
  result.toArray().then((students) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(students);
  });
};

const getSingle = async (req, res) => {
  //#swagger.tags=['Users']
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection("students")
    .find({ _id: userId });
  result.toArray().then((students) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(students[0]);
  });
};

module.exports = {
  getAll,
  getSingle,
  // createContact,
  // updateContact,
  // deleteContact,
};
