const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer',
        required: true,
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['success', 'failed'],
        default: 'success',
    },
}, { timestamps: true });
