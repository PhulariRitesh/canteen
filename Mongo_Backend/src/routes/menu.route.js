const express = require('express');
const { jwtSign } = require('../middlewares/jwtauth');

const router = express.Router();
const { getmenu, addmenu, updatemenu, deletemenu } = require('../controllers/menu.controller');

router.use(jwtSign);
router.route('/menu').get(getmenu).post(addmenu);
router.put('/menu:id', updatemenu);
router.delete('/menu:id', deletemenu);

module.exports = router;

