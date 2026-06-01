const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const createProduct = async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  const savedProduct = await newProduct.save();

  res.json(savedProduct);
};

module.exports = {
  getProducts,
  createProduct,
};