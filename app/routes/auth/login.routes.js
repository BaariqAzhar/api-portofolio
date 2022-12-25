const login = require('../../controllers/auth/login.controller.js');
const express = require('express');

const loginRoute = (app) => {
    let router = express.Router();

    router.post('/', login);

    app.use('/api/login', router);
};

module.exports = loginRoute;
