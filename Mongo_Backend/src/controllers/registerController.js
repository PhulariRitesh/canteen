const user = require('../models/user');

const register = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const newUser = new user({ email, password, role });
        await newUser.save();
        res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { register };