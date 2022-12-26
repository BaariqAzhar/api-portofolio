const jwt = require('jsonwebtoken');
require('dotenv').config({ path: __dirname + '/.env' });

const generateAccessToken = (data) => {
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env['TOKEN_EXPIRED_PERIOD'] });
};

module.exports = generateAccessToken;
