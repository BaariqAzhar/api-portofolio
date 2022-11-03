module.exports = (app) => {
    const intro = require('../controllers/intro.controller.js');

    let router = require('express').Router();

    router.post('/', intro.create);

    router.get('/', intro.findAll);

    app.use('/api/intro', router);
};
