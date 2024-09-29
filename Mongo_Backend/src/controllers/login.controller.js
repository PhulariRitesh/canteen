const customerLogin = async (req, res) => {
    try {
        const customer = await
            customer.findOne({ email
                : req.body.email });
        if (!customer) {
            return res.status(400).send('Invalid email');
        }
        if (customer.password !== req.body.password) {
            return res.status(400).send('Invalid password');
        }
        res.status(200).send('Login successful');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = { customerLogin };
