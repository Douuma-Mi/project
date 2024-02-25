const mongoose = require("mongoose");
const User = require("../../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const loginData = req.body;
  const { username, password } = loginData;
  const existUser = await User.findOne({ username:username });
  if (!existUser) {
    return res.status(401).json({ msg: "Invalid Credentials" });
  }
  const isMatched = await bcrypt.compare(password, existUser.password);
  if (!isMatched) {
    return res.status(401).json({ msg: "Invalid Credentials" });
  }
  const payload = { _id: existUser._id };
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 60 * 15,
  });
  res.send({ user: existUser, token });
};
