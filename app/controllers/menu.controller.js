const db = require('../models');
const Menu = db.menu;
const Op = db.Sequelize.Op;

// Create and Save a new Menu
exports.create = (req, res) => {
    // Validate request
    if (!req.body.order && !req.body.name_en && !req.body.name_id) {
        res.status(400).send({
            message: 'English and Indonesian name & order can not be empty!',
        });
        return;
    }

    // Create a Post
    const menu = {
        order: req.body.order,
        name_en: req.body.name_en,
        name_id: req.body.name_id,
    };

    // Save Post in the database
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

// Retrieve all Menu from the database.
exports.findAll = (req, res) => {
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
