//  Simple product model
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});


const product = mongoose.model('Product', productSchema, 'product');
module.exports = product;