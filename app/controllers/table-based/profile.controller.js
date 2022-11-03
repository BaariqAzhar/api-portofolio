const db = require('../../models');
const Profile = db.profile;
const Op = db.Sequelize.Op;

const create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
        return;
    }

    const profile = {
        name: req.body.name,
        photo: req.body.photo,
    };

    Profile.create(profile)
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
    Profile.findAll()
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
