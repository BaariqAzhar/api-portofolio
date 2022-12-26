const db = require('../../models');
const RefreshToken = db.refreshToken;

const logout = async (req, res) => {
    if (!req.body.token) {
        return res.status(400).send({
            message: 'refresh token can not be empty!',
        });
    }

    try {
        await RefreshToken.destroy({
            where: {
                token: req.body.token,
            },
        });
    } catch (err) {
        return res.status(500).send({
            message: err.message || 'Some error occured while query auth',
        });
    }
    return res.status(200).send({
        message: 'Logout success',
    });
};

module.exports = logout;
