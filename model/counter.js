/*
    This model is used as a helper while creating new Product
    While creating new product assign product id as seq from this model
    and after assigning the seq update the seq variable
*/
const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    id: {
        type: String
    },
    seq: {
        type: Number
    }
});

const Counter = mongoose.model('Counter', counterSchema);
module.exports = Counter;