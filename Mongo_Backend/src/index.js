const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/index.js');

dotenv.config({path:'./env'});

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);})
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// })();
