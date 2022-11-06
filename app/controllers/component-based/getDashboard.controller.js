const db = require('../../models');
const Intro = db.intro;
const SocialMedia = db.socialMedia;
// const Menu = db.menu;
const Op = db.Sequelize.Op;

const getDashboard = async (req, res) => {
    if (!req.body.lang && !req.body.privilege) {
        res.status(400).send({
            message: 'lang & privilege can not be empty!',
        });
        return;
    }

    let intro;
    let socialMedia;

    try {
        socialMedia = await SocialMedia.findAll();
        socialMedia = socialMedia.map((item) => {
            return {
                order: item.order,
                name: req.body.lang === 'id' ? item.name_id : item.name_en,
                link: item.link,
                logo: item.logo,
            };
        });
        socialMedia = socialMedia.sort((a, b) => (a.order > b.order ? 1 : -1));
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occured while query social media',
        });
    }

    try {
        intro = await Intro.findAll();
        intro = intro.map((item) => {
            return {
                id: item.id,
                order: item.order,
                show: item.show,
                description: req.body.lang === 'id' ? item.description_id : item.description_en,
            };
        });
        intro = intro.sort((a, b) => (a.order > b.order ? 1 : -1));
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occured while query intro',
        });
    }

    res.send({
        intro,
        socialMedia,
    });
};

module.exports = { getDashboard };
