const db = require('../models');
const Profile = db.profile;
const Op = db.Sequelize.Op;

// Create and Save a new Profile
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
        return;
    }

    // Create a Post
    const profile = {
        name: req.body.name,
        photo: req.body.photo,
    };

    // Save Post in the database
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

// Retrieve all Profile from the database.
exports.findAll = (req, res) => {
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
