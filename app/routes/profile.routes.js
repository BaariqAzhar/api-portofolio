module.exports = (app) => {
    const profile = require('../controllers/profile.controller.js');

    let router = require('express').Router();

    // Create a new profile
    router.post('/', profile.create);

    // Retrieve all profile
    router.get('/', profile.findAll);

    app.use('/api/profile', router);
};
