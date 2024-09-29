const user = require('../models/customer.model');

const register = async (req, res) => {
    try {
        const newUser = new user(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400, error.message);
    }
};


module.exports = { register };