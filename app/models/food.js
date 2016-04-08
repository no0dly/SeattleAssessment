var mongoose = require('mongoose');

module.exports = mongoose.model('Food', {
    foodName: {
        type: String,
        default: 'name'
    },
    price: {
        type: Number,
        default: 0
    }
});