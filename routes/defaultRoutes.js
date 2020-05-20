const express = require('express');
const defaultController = require('../controllers/defaultController');
const router = express.Router();
const cors = require('cors')
router.use(cors())

//Read Products Route
router.route('/products')
  .get(defaultController.getProducts)

//Create Product Route
router.route('/product/create')
  .post(defaultController.createProduct)

//Update Product Route
router.route('/product/edit/:id')
  .put(defaultController.updateProduct)

//Delete Product Route
  router.route('/product/delete/:id')
    .delete(defaultController.deleteProduct)

module.exports = router
