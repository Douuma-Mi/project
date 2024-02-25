const mongoose = require("mongoose");
const user = require("../../models/UserModel");

exports.addUser = async (req, res) => {
  try {
    // create a new user
    const newUser = new user(req.body);
    console.log(newUser);
    const existUser = await user.findOne({ username: req.body.username });
    console.log(existUser);
    if (existUser) {
      return res.status(400).json({ message: "user exist" });
    }

    if (req.body.role == "Admin") {
      res.json({
        message: "You are not authorized to perform this action",
      });
    } else {
      await newUser.save();
      res.send(newUser);
    }
  } catch (error) {
    res.send(`Error in adding User : ${error}`);
  }
};
