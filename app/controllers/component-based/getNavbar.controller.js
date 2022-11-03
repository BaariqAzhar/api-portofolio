const db = require('../../models');
const Profile = db.profile;
const Menu = db.menu;
const Op = db.Sequelize.Op;

const getNavbar = async (req, res) => {
    if (!req.body.lang && !req.body.privilege) {
        res.status(400).send({
            message: 'lang & privilege can not be empty!',
        });
        return;
    }

    let menu;
    let profile;

    try {
        menu = await Menu.findAll();
        menu = menu.map((item) => {
            return {
                order: item.order,
                name: req.body.lang === 'id' ? item.name_id : item.name_en,
                path: item.path,
            };
        });
        menu = menu.sort((a, b) => (a.order > b.order ? 1 : -1));
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error occured while query menu',
        });
    }

    try {
        profile = await Profile.findAll();
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error occured while query menu',
        });
    }

    res.send({
        name: profile?.[0]?.name,
        photo: profile?.[0]?.photo,
        menu: menu,
    });
};

module.exports = { getNavbar };
