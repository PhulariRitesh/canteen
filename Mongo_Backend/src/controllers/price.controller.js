const prices = require('../models/price.model');

const calculatePrice = async (req, res) => {
    try {
        let totalprice = 0;
        for (i = 0; i < req.body.length; i++) {
            const price = await prices.findOne({ product: req.body[i].product });
            totalprice += price.price * req.body[i].quantity;
        }
        res.status(200).send({ total: totalprice });
        console.log(totalprice);
    } catch (error) {
        res.status(400, error.message);
    }
};

module.exports = { calculatePrice };
