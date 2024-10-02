const express = require('express');
// const { jwtSign } = require('../middlewares/jwtauth');

const router = express.Router();
const { getmenu, addmenu,addmenuData, updatemenu, deletemenu } = require('../controllers/menu.controller');

// router.use(jwtSign);
router.route('/')
    .get(getmenu)
    .post(addmenuData);

// router.route('/api').post(addmenuData);

router.route('/:id')
    .put(updatemenu)
    .delete(deletemenu);

module.exports = router;

