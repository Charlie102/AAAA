const mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Price: Number,
    Unit: String,
    Information: String,
    urlimg: String
} , { collection: 'products' } );

var Product = mongoose.model('products', productSchema);

module.exports = Product;