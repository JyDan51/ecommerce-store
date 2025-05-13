// backend/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  category: String,
  color: String,
  size: String,
  material: String
});

module.exports = mongoose.model('Product', productSchema);
