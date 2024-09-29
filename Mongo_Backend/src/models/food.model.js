const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            min: [6,'Must be at least 6 characters,got {VALUE}'],
            max: 255
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
            max: 1024,
        },
        image: {
            type: String,
            required: true,
        },
        available: {
            type: Boolean,
            required: true,
        },
    }, { timestamps: true });