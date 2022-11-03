const menu = require('../../controllers/table-based/menu.controller.js');
const express = require('express');

const menuRoute = (app) => {
    let router = express.Router();

    router.post('/', menu.create);

    router.get('/', menu.findAll);

    app.use('/api/menu', router);
};

module.exports = menuRoute;
