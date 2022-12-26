const getNewerToken = require('../../controllers/auth/getNewerToken.controller.js');
const express = require('express');

const getNewerTokenRoute = (app) => {
    let router = express.Router();

    router.post('/', getNewerToken);

    app.use('/api/get-newer-token', router);
};

module.exports = getNewerTokenRoute;
