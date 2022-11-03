const db = require('../../models');
const Profile = db.profile;
const Menu = db.menu;
const Op = db.Sequelize.Op;

const getNavbar = async (req, res) => {
    // Menu.findAll({
    //     attributes: ['name_id', 'name_en'],
    // })
    //     .then((data) => {
    //         res.send(data);
    //     })
    //     .catch((err) => {
    //         res.status(500).send({
    //             message: err.message || 'Some error occured while find profile',
    //         });
    //     });

    try {
        const menu = await Menu.findAll({ attributes: ['name_id', 'name_en'] });
        console.log('data', data);

        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error occured while find profile',
        });
    }

    // Profile.findAll({
    //     attributes: ['photo', 'name'],
    // })
    //     .then((data) => {
    //         res.send(data);
    //     })
    //     .catch((err) => {
    //         res.status(500).send({
    //             message: err.message || 'Some error occured while find profile',
    //         });
    //     });
};

module.exports = { getNavbar };
