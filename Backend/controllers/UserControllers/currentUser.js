const mongoose = require("mongoose");
const User = require("../../models/UserModel");

exports.getUser = async (req, res) => {
  res.send({ user: req.user });
};
