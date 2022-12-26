const jwt = require('jsonwebtoken');
const db = require('../../models');
const generateAccessToken = require('../../helper/generateAccessToken.js');
const Auth = db.auth;
const RefreshToken = db.refreshToken;
const Op = db.Sequelize.Op;
require('dotenv').config({ path: __dirname + '/.env' });

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
        return res.status(500).send({
            message: err.message || 'Some error occured while query auth',
        });
    }

    if (auth?.length === 0) {
        return res.status(401).send({
            message: 'Email or password is incorrect',
        });
    }

    const encodeToken = {
        uuid: auth?.[0]?.uuid,
        email: auth?.[0]?.email,
        privilege: auth?.[0]?.privilege,
    };

    const accessToken = generateAccessToken(encodeToken);
    const refreshToken = jwt.sign(encodeToken, process.env.REFRESH_TOKEN_SECRET);
    RefreshToken.create({ token: refreshToken })
        .then((data) => {
            console.log('=== New Refresh Token Created, for ', encodeToken?.email);
            return res.send({ accessToken: accessToken, refreshToken: refreshToken });
        })
        .catch((err) => {
            return res.status(500).send({ message: err.message || 'Some error occurred while creating the refresh token.' });
        });
};

module.exports = login;
