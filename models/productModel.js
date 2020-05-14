const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true
  },
  product_tag: {
    type: String,
    required: true
  },
  product_price: {
    type: String,
    required: true
  },
  product_seller: {
    type: String,
    required: true
  },
  product_location : {
    type: String
  },
  product_description: {
    type: String,
    required: true
  },

});

mongoose.model('Product', productSchema)
