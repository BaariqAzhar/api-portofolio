const db = require('../../models');
const Auth = db.auth;
const Op = db.Sequelize.Op;

const login = async (req, res) => {
    if (!req.body.email && !req.body.password) {
        res.status(400).send({
            message: 'email & password can not be empty!',
        });
        return;
    }

    let auth;

    try {
        auth = await Auth.findAll({
            where: {
                email: req.body.email,
                password: req.body.password,
            },
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error occured while query auth',
        });
    }

    res.send({
        uuid: auth?.[0]?.uuid,
        email: auth?.[0]?.email,
        
    });
}

module.exports = login ;
