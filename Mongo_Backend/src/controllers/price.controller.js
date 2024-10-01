const prices = require('../models/payment.model');
const totalprice = require('../middlewares/totalprice');

const calculatePrice = async (req, res) => {
    try {
        const total = await totalprice(req.body);
        let totalprice = 0;
        for (i = 0; i < req.body.length; i++) {
            const price = await prices.findOne({ product: req.body[i].product });
            totalprice += price.price * req.body[i].quantity;
        }
        res.status(200).send({ total: totalprice });
        console.log(totalprice);
        console.log(total);
    } catch (error) {
        res.status(400, error.message);
    }
};

module.exports = { calculatePrice };
