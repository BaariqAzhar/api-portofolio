const db = require('../../models');
const Menu = db.menu;
const Op = db.Sequelize.Op;

const create = (req, res) => {
    if (!req.body.order && !req.body.name_en && !req.body.name_id) {
        res.status(400).send({
            message: 'English and Indonesian name & order can not be empty!',
        });
        return;
    }

    const menu = {
        order: req.body.order,
        name_en: req.body.name_en,
        name_id: req.body.name_id,
    };

    Menu.create(menu)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the menu',
            });
        });
};

const findAll = (req, res) => {
    Menu.findAll()
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
