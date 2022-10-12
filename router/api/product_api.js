const express = require('express'); // get express instance
const router = express.Router(); // get router


// product controller
const productAPI = require('../../controller/api/product');


router.post('/create', productAPI.addNewProduct); // add new product in list
router.get('/', productAPI.getAllProduct); // get all products from list
router.delete('/:id', productAPI.deleteSingleProduct); // delete specific product form list
router.post('/:id/update_quantity', productAPI.updateSingleProduct); // update specific product form list

module.exports = router;