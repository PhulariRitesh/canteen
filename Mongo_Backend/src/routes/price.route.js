const express = require('express');

const router = express.Router();
const { price } = require('../controllers/price.controller');

router.get('/payment', price);
router.post('/payment', price);

module.exports = router;