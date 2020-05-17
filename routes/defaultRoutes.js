const express = require('express');
const defaultController = require('../controllers/defaultController');
const router = express.Router();
const cors = require('cors')
router.use(cors())

router.route('/products')
  .get(defaultController.getProducts)

router.route('/products/create')
  .post(defaultController.createProduct)

module.exports = router
