const router = require('express').Router();
const {register} = require('../controllers/registerController');

router.post('/register', register);

module.exports = router;
