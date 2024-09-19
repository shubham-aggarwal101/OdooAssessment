const userModel = require("../models/user");

const createUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteUser = async (req, res) => {
    try {
      const phoneNumber = req.params.phoneNumber;
      const user = await userModel.findOneAndDelete({ phoneNumber });
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.send(`User with phone number ${phoneNumber} deleted successfully`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

module.exports = { createUser, getAllUsers, deleteUser };
