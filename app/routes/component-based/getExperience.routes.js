const getExperience = require('../../controllers/component-based/getExperience.controller.js');
const express = require('express');

const getExperienceRoute = (app) => {
    let router = express.Router();

    router.get('/', getExperience.getExperience);

    app.use('/api/get-experience', router);
};

module.exports = getExperienceRoute;
