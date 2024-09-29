const express = require('express');

const router = express.Router();
const { menu } = require('../controllers/menu.controller');

router.get('/menu', menu);
router.post('/menu', menu);
router.put('/menu:id', menu);
router.delete('/menu:id', menu);

module.exports = router;

