const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  p_name: String,
  category: String,
  p_desc: String,
  p_price: Number,
  status: String,
  p_qty: Number,
  rate: Number,
  image: String,
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
