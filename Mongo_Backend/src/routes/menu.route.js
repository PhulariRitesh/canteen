const express = require('express');

const router = express.Router();
const { getmenu, addmenu, updatemenu, deletemenu } = require('../controllers/menu.controller');

router.get('/menu', getmenu);
router.post('/menu', addmenu);
router.put('/menu:id', updatemenu);
router.delete('/menu:id', deletemenu);

module.exports = router;

