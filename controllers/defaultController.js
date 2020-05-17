const express = require('express');
const Product = require('../models/productModel');
const mongoose = require('mongoose');

module.exports = {

  getProducts: (req, res) =>{
    Product.find((err , products)=> {
      if(!err){
        res.json(products)
      }
      else {
        console.log('Fatal error')
      }
    })
  },

  createProduct: (req, res)=>{
    const newProduct = new Product({
      name: req.body.name,
      tag: req.body.tag,
      price: req.body.price,
      seller: req.body.seller,
      location: req.body.location,
      description: req.body.description
    },
    Product.findOne({
      name: req.body.name
    })
      .then(product => {
        if (!product) {
            Product.create(newProduct)
              .then(product => {
                res.json({ status: product.name + ' has been created' })
              })
              .catch(err => {
                res.send('error: ' + err)
              })
          }
        else {
          res.json({ error: 'Product already exists' })
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  )
  }
}
