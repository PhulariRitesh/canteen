const express = require('express');
//How to make all these routers safe from unauthorized access?
//You can use JWT for this purpose.
//You can create a middleware function that verifies the JWT token.
//If the token is valid, the user can access the routes.
//If the token is invalid, the user will be redirected to the login page.
//Here is an example of how you can create a middleware function to verify the JWT token:
// I have defined jwt middleware in a separate file called jwtauth.js
//How to use that here 
const {jwtSign} = require('../middlewares/jwtauth');

const router = express.Router();
const { customerLogin } = require('../controllers/login.controller');

router.use(jwtSign);
router.post('/login', customerLogin);

module.exports = router;