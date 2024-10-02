const order = require('../models/order.model');

const expectedtime = require('../middlewares/expected_preparation');

const validatecart = require('../middlewares/validatecart');

const createOrder = async (req, res) => {
    try {
        const isValid = await validatecart(req.body);
        if (!isValid) {
            return res.status(400).send('Invalid cart');
        }
        console.log(req.body);
        const newOrder = new order(req.body);
        await newOrder.save();
        res.status(200).send(newOrder);
    } catch (error) {
        res.status(400, error.message);
    }
}


const getuserOrders = async (req, res) => {
    try {
        const validateCart = await validatecart(req.body);
        if (!validateCart) {
            return res.status(400).send('Invalid cart');
        }
        const orders = await order.find({ customerId: req.params.id });
        res.status(200).send(orders);
    } catch (error) {
        res.status(400, error.message);
    }
}


const getadminOrders = async (req, res) => {
    try {
        const orders = await order.find();
        res.status(200).send(orders);
    } catch (error) {
        res.status(400, error.message);
    }
}


const updateOrderStatus = async (req, res) => {
    try {
        const order = await order.findByIdAndUpdate
            (req.params.id, { status: req.body.status });
            let expected = await expectedtime(req.body);

        await order.save();
        res.status(200).send({'order':order, 'expectedpreptime':expected});
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