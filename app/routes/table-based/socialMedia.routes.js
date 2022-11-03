const socialMediaController = require('../../controllers/table-based/socialMedia.controller.js');
const express = require('express');

const socialMediaRoute = (app) => {
    let router = express.Router();

    router.post('/', socialMediaController.create);

    router.get('/', socialMediaController.findAll);

    app.use('/api/social-media', router);
};

module.exports = socialMediaRoute;
