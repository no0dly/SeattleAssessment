var mongoose = require('mongoose');

module.exports = mongoose.model('Food', {
    foodName: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    wasDeleted: {
        type: Boolean,
        default: false
    }
});