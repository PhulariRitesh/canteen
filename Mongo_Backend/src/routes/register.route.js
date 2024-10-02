const router = require('express').Router();
// const {jwtSign} = require('../middlewares/jwtauth');
const {register} = require('../controllers/register.controller');

// router.use(jwtSign);
router.route('/').post(register);

module.exports = router;