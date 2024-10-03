const express = require('express');

// const {jwtSign} = require('../middlewares/jwtauth');

const router = express.Router();
const { customerLogin } = require('../controllers/login.controller');

// router.use(jwtSign);
router.route('/').post(customerLogin);

module.exports = router;