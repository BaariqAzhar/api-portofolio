const db = require('../../models');
const SocialMedia = db.socialMedia;
const Op = db.Sequelize.Op;

const create = (req, res) => {
    if (!req.body.order && !req.body.name_id && !req.body.name_en) {
        res.status(400).send({
            message: 'Order && name_id && name_en can not be empty!',
        });
        return;
    }

    const socialMedia = {
        order: req.body.order,
        name_id: req.body.name_id,
        name_en: req.body.name_en,
        link: req.body.link,
        logo: req.body.logo,
    };

    SocialMedia.create(socialMedia)
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
    SocialMedia.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occured while find profile',
            });
        });
};

module.exports = {
    create,
    findAll,
};
