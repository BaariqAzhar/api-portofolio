const db = require('../../models');
const Experience = db.experiece;
const Op = db.Sequelize.Op;

const create = (req, res) => {
    if (!req.body.order && !req.body.role && !req.body.company) {
        res.status(400).send({
            message: 'Order && role && company can not be empty!',
        });
        return;
    }

    const experiece = {
        order: req.body.order,
        exp_type: req.body.exp_type,
        icon: req.body.icon,
        role: req.body.role,
        company: req.body.company,
        employment_type: req.body.employment_type,
        date_range: req.body.date_range,
        location: req.body.location,
        description_id: req.body.description_id,
        description_en: req.body.description_en,
    };

    Experience.create(experiece)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Experience.',
            });
        });
};

const findAll = (req, res) => {
    Experience.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occured while find experience',
            });
        });
};

module.exports = {
    create,
    findAll,
};
