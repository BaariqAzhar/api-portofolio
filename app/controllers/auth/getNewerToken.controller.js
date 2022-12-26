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
    // if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, encodeData) => {
        if (err) return res.sendStatus(403);
        const accessToken = generateAccessToken(encodeData);
        return res.json({ accessToken: accessToken });
    });
};

module.exports = getNewerToken;
