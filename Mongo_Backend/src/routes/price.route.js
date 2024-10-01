const express = require('express');
const { jwtSign } = require('../middlewares/jwtauth');
const router = express.Router();
const { calculatePrice } = require('../controllers/price.controller');

router.use(jwtSign);
router.get('/payment', calculatePrice);
router.post('/payment', calculatePrice);

module.exports = router;