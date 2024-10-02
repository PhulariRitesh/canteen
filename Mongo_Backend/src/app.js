const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static('public'));

app.use('/register', require('./routes/register.route'));
app.use('/login', require('./routes/login.route'));
app.use('/menu', require('./routes/menu.route'));

app.use('/order', require('./routes/order.route'));
app.use('price', require('./routes/price.route'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;