const getNavbar = require('../../controllers/component-based/getNavbar.controller.js');
const express = require('express');

const getNavbarRoute = (app) => {
    let router = express.Router();

    router.post('/', getNavbar.getNavbar);

    app.use('/api/get-navbar', router);
};

module.exports = getNavbarRoute;
