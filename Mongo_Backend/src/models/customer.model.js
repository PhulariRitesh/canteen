const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: [6,'Must be at least 6 characters,got {VALUE}'],
        max: 255
    },
    email: {
        type: String,
        required: true,
        validate : ({
            validator: function(v) {
              return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
            }),
        max: 255,
        unique: true,
    },
    rollnumber: {
        type: Number,
        required: true,
        unique: true,
    },
    roomnumber: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        validate : ({
            validator: function(v) {
              return /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
            }),
    },
    password: {
        type: String,
        required: [true,'Password is required'],
        max: 1024,
        min: 6
    },
}, { timestamps: true });


module.exports = mongoose.model('customer', customerSchema);

