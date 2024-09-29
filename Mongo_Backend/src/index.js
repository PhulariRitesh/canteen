const dotenv = require('dotenv');
const connectDB = require('./db/index.js');

dotenv.config({path:'./env'});

connectDB()
.then(() => {
    const app = require('./app.js');
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error(error);
    process.exit(1);
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
