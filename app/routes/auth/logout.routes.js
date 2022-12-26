const logout = require('../../controllers/auth/logout.controller.js');
const express = require('express');

const logoutRoute = (app) => {
    let router = express.Router();

    router.post('/', logout);

    app.use('/api/logout', router);
};

module.exports = logoutRoute;
