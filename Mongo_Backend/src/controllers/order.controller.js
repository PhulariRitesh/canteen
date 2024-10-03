const order = require('../models/order.model');
const expectedtime = require('../middlewares/expected_preparation');
const validatecart = require('../middlewares/validatecart');

const createOrder = async (req, res) => {
    try {
        // Validate the cart
        console.log(req.body);
        // const validationResult = await validatecart(req.body);
        // if (!validationResult.status) {
        //     return res.status(400).send({
        //         message: validationResult.message,
        //         invalidItems: validationResult.invalidItems || null
        //     });
        // }
        // console.log(req.body);

        // Create the new order
        const newOrder = new order(req.body);
        await newOrder.save();
        res.status(200).send(newOrder);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

const getuserOrders = async (req, res) => {
    try {
        // Validate the cart
        const validationResult = await validatecart(req.body);
        if (!validationResult.status) {
            return res.status(400).send({
                message: validationResult.message,
                invalidItems: validationResult.invalidItems || null
            });
        }

        // Fetch user orders
        const orders = await order.find({ customerId: req.params.id });
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

const getadminOrders = async (req, res) => {
    try {
        const orders = await order.find();
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

const updateOrderStatus = async (req, res) => {
    try {
        const updatedOrder = await order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        const expected = await expectedtime(req.body);

        await updatedOrder.save();
        res.status(200).send({
            order: updatedOrder,
            expectedpreptime: expected
        });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        await updatedOrder.save();
        res.status(200).send(updatedOrder);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        await order.findByIdAndDelete(req.params.id);
        res.status(200).send('Order deleted');
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

module.exports = {
    createOrder,
    getuserOrders,
    getadminOrders,
    updateOrderStatus,
    updateOrder,
    deleteOrder
};
