const db = require('../../models');
const Article = db.article;
const Op = db.Sequelize.Op;

const create = (req, res) => {
    if (!req.body.order && !req.body.title_id && !req.body.title_en && !req.body.date) {
        res.status(400).send({
            message: 'order, title_id, title_en, & date can not be empty!',
        });
        return;
    }

    const article = {
        order: req.body.order,
        title_id: req.body.title_id,
        title_en: req.body.title_en,
        date: req.body.date,
        description_id: req.body.description_id,
        description_en: req.body.description_en,
    };
l
    Article.create(article)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the article.',
            });
        });
};

const findAll = (req, res) => {
    Article.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occured while find article',
            });
        });
};

module.exports = {
    create,
    findAll,
};
