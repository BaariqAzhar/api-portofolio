const experienceController = require('../../controllers/table-based/experience.controller');
const express = require('express');

const experienceRoute = (app) => {
    let router = express.Router();

    router.post('/', experienceController.create);

    router.get('/', experienceController.findAll);

    app.use('/api/experience', router);
};

module.exports = experienceRoute;
