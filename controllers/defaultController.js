const express = require('express');
const Product = require('../models/productModel');
const mongoose = require('mongoose');

module.exports = {

//Display List Of Product Controller
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

//Create Product Controller
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
},

//Update Product Controller
updateProduct: (req, res)=> {
  const id = req.params.id
  Product.findById(id)
    .then(product => {
      product.name = req.body.name,
      product.tag = req.body.tag,
      product.price = req.body.price,
      product.seller = req.body.seller,
      product.location= req.body.location,
      product.description= req.body.description

      product.save()
      .then(updatedProduct => {
        res.json({status: "Product has been updated"})
      })
      .catch(err => {
        res.json({status: "Error at" + err})
      })
    },

)
},

//Delete Product Controller
deleteProduct: (req, res)=> {

  const id = req.params.id

  Product.findByIdAndDelete(id)
  .then(deletedProduct => {
    res.status({status: 'Product has been deleted succesfully'})
  })
  .catch(err => {
    res.json({status: "Error at" + err})
  })
}
}
