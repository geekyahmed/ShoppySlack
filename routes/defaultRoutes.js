const express = require('express');
const defaultController = require('../controllers/defaultController');
const router = express.Router();
const cors = require('cors')
router.use(cors())

router.route('/products')
  .get(defaultController.getProducts)

router.route('/product/create')
  .post(defaultController.createProduct)

router.route('/product/edit/:id')
  .put(defaultController.updateProduct)
module.exports = router
