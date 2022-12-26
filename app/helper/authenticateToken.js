const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    // if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, encodeToken) => {
        console.log(err);
        // if (err) return res.sendStatus(403);
        req.encodeToken = encodeToken;
        req.privilege = encodeToken?.privilege || 'guest';
        next();
    });
};

module.exports = authenticateToken;
