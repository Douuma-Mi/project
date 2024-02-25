const mongoose = require("mongoose");
const Product = require("../../models/ProductModel");

exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    return res.status(201).json({ message: "New product added!" });
  } catch (err) {
    res.send(400).json({ error: err });
  }
};
