const getDashboard = require('../../controllers/component-based/getDashboard.controller');
const express = require('express');

const getDashboardRoute = (app) => {
    let router = express.Router();

    router.post('/', getDashboard.getDashboard);

    app.use('/api/get-dashboard', router);
};

module.exports = getDashboardRoute;
