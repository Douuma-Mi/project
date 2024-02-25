const mongoose = require("mongoose");
const Product = require("../../models/ProductModel");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("owner");
    res.send(products);
  } catch (err) {
    console.log(err);
  }
};
