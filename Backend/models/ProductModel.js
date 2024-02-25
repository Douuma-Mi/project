const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const user = require("./UserModel");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required!!"],
  },
  price: {
    type: Number,
    required: [true, "Product Price is required!!"],
  },
  quantity: {
    type: Number,
    required: [true, "Product Quantity is required!!"],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user,
  },
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
