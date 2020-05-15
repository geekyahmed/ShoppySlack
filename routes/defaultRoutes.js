const express = require('express');
const defaultController = require('../controllers/defaultController');
const router = express.Router();

router.route('/products')
  .get(defaultController.getProducts)

router.route('/create')
  .post(defaultController.createProduct)

module.exports = router
