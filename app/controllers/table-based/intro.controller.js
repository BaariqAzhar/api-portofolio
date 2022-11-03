const db = require('../../models');
const Intro = db.intro;
const Op = db.Sequelize.Op;

const create = (req, res) => {
    if (!req.body.order && !req.body.description_en && !req.body.description_id) {
        res.status(400).send({
            message: 'Order && description_en && description_id can not be empty!',
        });
        return;
    }

    const intro = {
        order: req.body.order,
        show: req.body.show,
        description_en: req.body.description_en,
        description_id: req.body.description_id,
    };

    Intro.create(intro)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Post.',
            });
        });
};

const findAll = (req, res) => {
    Intro.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occured while find profile',
            });
        });
};

module.exports = { create, findAll };
