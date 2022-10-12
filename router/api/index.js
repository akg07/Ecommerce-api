const express = require('express');
const router = express.Router();

// route to product api module
router.use('/products', require('./product_api')); 

module.exports = router;
