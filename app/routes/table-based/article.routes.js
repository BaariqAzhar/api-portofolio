const articleController = require('../../controllers/table-based/article.controller');
const express = require('express');

const articleRoute = (app) => {
    let router = express.Router();

    router.post('/', articleController.create);

    router.get('/', articleController.findAll);

    app.use('/api/article', router);
};

module.exports = articleRoute;
