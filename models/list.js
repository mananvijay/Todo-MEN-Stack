const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    des: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const List = mongoose.model('List', listSchema);
module.exports = List;