const jwt = require('jsonwebtoken');
const db = require('../../models');
const generateAccessToken = require('../../helper/generateAccessToken.js');
const Auth = db.auth;
const RefreshToken = db.refreshToken;
const Op = db.Sequelize.Op;
require('dotenv').config({ path: __dirname + '/.env' });

const getNewerToken = async (req, res) => {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const encodeData = {
            uuid: auth?.[0]?.uuid,
            email: auth?.[0]?.email,
            privilege: auth?.[0]?.privilege,
        };
        const accessToken = generateAccessToken({ name: user.name });
        res.json({ accessToken: accessToken });
    });
};

module.exports = getNewerToken;
