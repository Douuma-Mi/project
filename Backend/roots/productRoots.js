const express = require("express");
const root = express.Router();
const productControllersGet = require("../controllers/productControllers/getProducts");
const productControllers = require("../controllers/productControllers/addProduct");
const isAuth = require("../middleware/isAuth");

root.post("/add", isAuth(), productControllers.addProduct);
root.get("/", productControllersGet.getProducts);

module.exports = root;
