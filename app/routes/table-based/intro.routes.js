const intro = require('../../controllers/table-based/intro.controller.js');
const express = require('express');

const introRoute = (app) => {
    let router = express.Router();

    router.post('/', intro.create);

    router.get('/', intro.findAll);

    app.use('/api/intro', router);
};

module.exports = introRoute;
