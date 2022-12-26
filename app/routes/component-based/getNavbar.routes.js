const getNavbar = require('../../controllers/component-based/getNavbar.controller.js');
const express = require('express');
const authenticateToken = require('../../helper/authenticateToken.js');

const getNavbarRoute = (app) => {
    let router = express.Router();

    router.post('/', authenticateToken, getNavbar);

    app.use('/api/get-navbar', router);
};

module.exports = getNavbarRoute;
