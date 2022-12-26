const db = require('../../models');
const Profile = db.profile;
const Menu = db.menu;
const Op = db.Sequelize.Op;

const getNavbar = async (req, res) => {
    if (!req.body.lang) {
        res.status(400).send({
            message: 'lang',
        });
        return;
    }

    let menu;
    let profile;

    try {
        menu = await Menu.findAll();
        if (req?.privilege) {
            menu = menu.filter((item) => item.privilege.includes(req?.privilege));
        }
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

module.exports = getNavbar;
