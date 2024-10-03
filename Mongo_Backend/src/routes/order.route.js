const express = require('express');
const router = express.Router();
const { createOrder, getuserOrders, getadminOrders, updateOrderStatus, updateOrder, deleteOrder } = require('../controllers/order.controller');

router.post('/customer/order', createOrder); // Create a new order
router.get('/customer/orders/:id', getuserOrders); // Get orders for a specific customer
router.get('/orders', getadminOrders); // Get all orders (admin)
router.put('/customer/order/:id', updateOrderStatus); // Update order status (admin)
router.put('/customer/order/:id', updateOrder); // Update an order (customer)
router.delete('/customer/order/:id', deleteOrder); // Delete an order

module.exports = router;
