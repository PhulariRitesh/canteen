const router = require('express').Router();
const {jwtSign} = require('../middlewares/jwtauth');
const {register} = require('../controllers/register.controller');

router.use(jwtSign);
router.post('/register', register);

module.exports = router;