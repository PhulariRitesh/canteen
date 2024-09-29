const mongoose = require('mongoose');
const DB_NAME  = require('../constants.js');
const dotenv = require('dotenv');


dotenv.config();

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected !! DB HOST: ${connection.connection.host}`); 
    } catch (error) {
        console.log('MongoDB connection failed with error:',error);
        process.exit(1);
    }
};

module.exports = connectDB;

