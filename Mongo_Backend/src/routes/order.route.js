const express = require('express');

const router = express.Router();

const { order } = require('../controllers/order.controller');

router.get('/customer/orders', order);
router.post('/customer/order', order);
router.put('/customer/order:id', order);
router.get('/orders', order);
router.delete('/customer/order:id', order);

module.exports = router;