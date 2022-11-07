const db = require('../../models');
const Article = db.article;
const Op = db.Sequelize.Op;

const getArticle = async (req, res) => {
    if (!req.body.lang && !req.body.privilege) {
        res.status(400).send({
            message: 'lang & privilege can not be empty!',
        });
        return;
    }

    let article;

    try {
        article = await Article.findAll();
        article = article.map((item) => {
            return {
                id: item.id,
                order: item.order,
                title: req.body.lang === 'id' ? item.title_id : item.title_en,
                date: item.date,
                description: req.body.lang === 'id' ? item.description_id : item.description_en,
            };
        });
        article = article.sort((a, b) => (a.order > b.order ? 1 : -1));
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occured while query article',
        });
    }

    res.send({
        article,
    });
};

module.exports = { getArticle };
