const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    expectedTime: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['snacks', 'beverages', 'desserts', 'fastfood', 'roti', 'rice', 'breakfast'],
    },
    available: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
