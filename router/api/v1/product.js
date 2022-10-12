const express = require('express');
const router = express.Router();
const productController = require('../../../controller/api/v1/product');

router.post('/create', productController.addNewProduct);
router.get('/', productController.getAllProduct);
router.delete('/:id', productController.deleteSingleProduct);
router.post('/:id/update_quantity/', productController.updateSingleProduct);


module.exports = router;