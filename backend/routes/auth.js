const express = require("express");

const authHandlers = require('../controllers/auth');

const router = express.Router();

router.post('/login', authHandlers.doLogin) 

router.post('/signup', authHandlers.doSignup);

module.exports = router;
