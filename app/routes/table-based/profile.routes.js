const profile = require('../../controllers/table-based/profile.controller.js');
const express = require('express');

const profileRoute = (app) => {
    let router = express.Router();

    router.post('/', profile.create);

    router.get('/', profile.findAll);

    app.use('/api/profile', router);
};

module.exports = profileRoute;
