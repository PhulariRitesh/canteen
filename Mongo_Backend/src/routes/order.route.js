const express = require('express');

const router = express.Router();

const { createOrder, getuserOrders, getadminOrders, updateOrderStatus, updateOrder, deleteOrder } = require('../controllers/order.controller');

router.get('/customer/orders', getuserOrders);
router.post('/customer/order', createOrder);
router.put('/customer/order:id', updateOrderStatus);
router.get('/orders', getadminOrders);
router.delete('/customer/order:id', deleteOrder);
router.put('/order:id', updateOrder);

module.exports = router;