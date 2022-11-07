const getArticle = require('../../controllers/component-based/getArticle.controller.js');
const express = require('express');

const getArticleRoute = (app) => {
    let router = express.Router();

    router.get('/', getArticle.getArticle);

    app.use('/api/get-article', router);
};

module.exports = getArticleRoute;
