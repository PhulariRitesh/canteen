const order = require('../models/order.model');
//function to place new order with cart items
const createOrder = async (req, res) => {
    try {
        const newOrder = new order(req.body);
        await newOrder.save();
        res.status(200).send(newOrder);
    } catch (error) {
        res.status(400, error.message);
    }
}

//Function to fetch all orders for customer
const getuserOrders = async (req, res) => {
    try {
        const orders = await order.find({ customerId: req.params.id });
        res.status(200).send(orders);
    } catch (error) {
        res.status(400, error.message);
    }
}

//Function to fetch all orders for admin
const getadminOrders = async (req, res) => {
    try {
        const orders = await order.find();
        res.status(200).send(orders);
    } catch (error) {
        res.status(400, error.message);
    }
}


//Function toupdate order status for admin
const updateOrderStatus = async (req, res) => {
    try {
        await order.findByIdAndUpdate
            (req.params.id, { status: req.body.status });
        await order.save();
        res.status(200).send(order);
    }
    catch (error) {
        res.status(400, error.message);
    }
}

const updateOrder = async (req, res) => {
    try {
        await order.findByIdAndUpdate(req.params.id, req.body);
        await order.save();
        res.status(200).send(order);
    }
    catch (error) {
        res.status(400, error.message);
    }
}

const deleteOrder = async (req, res) => {
    try {
        await order.findByIdAndDelete(req.params.id);
        res.status(200).send('Order deleted');
    } catch (error) {
        res.status(400, error.message);
    }
}

module.exports = { createOrder, getuserOrders, getadminOrders, updateOrderStatus, updateOrder, deleteOrder };