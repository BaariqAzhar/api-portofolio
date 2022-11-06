const db = require('../../models');
const Experiece = db.experiece;
// const Menu = db.menu;
const Op = db.Sequelize.Op;

const getExperience = async (req, res) => {
    if (!req.body.lang && !req.body.privilege) {
        res.status(400).send({
            message: 'lang & privilege can not be empty!',
        });
        return;
    }

    let experience;

    try {
        experience = await Experiece.findAll();
        experience = experience.map((item) => {
            return {
                id: item.id,
                order: item.order,
                exp_type: item.exp_type,
                icon: item.icon,
                role: item.role,
                company: item.company,
                employment_type: item.employment_type,
                date_range: item.date_range,
                location: item.location,
                description: req.body.lang === 'id' ? item.description_id : item.description_en,
            };
        });
        experience = experience.sort((a, b) => (a.order > b.order ? 1 : -1));
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occured while query experience',
        });
    }

    res.send({
        experience,
    });
};

module.exports = { getExperience };
