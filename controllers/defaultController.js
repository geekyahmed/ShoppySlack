const express = require('express');
const Product = require('../models/productModel').Product;

module.exports = {

  getProducts: async(req, res) =>{
    Product.find()
          .then(products => {
              res.json(products);
          });
  },

  createProduct: (req, res)=>{

    const newProduct = new Product({
      name: req.body.name,
      tag: req.body.tag,
      price: req.body.price,
      seller: req.body.seller,
      location: req.body.location,
      description: req.body.description
    });
    newProduct.save().then(product => {
      res.redirect('/api/products')
    })
  }
}
