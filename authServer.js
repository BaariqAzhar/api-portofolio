require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Models
const db = require('./app/models');

const app = express();

let whiteList = [process.env.FE_LOCAL, process.env.FE_PRODUCTION, process.env.FE_PRODUCTION_HTTP];
let corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Sync database
db.sequelize.sync();

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Portofolio REST API for Auth' });
});

const loginRoute = require('./app/routes/auth/login.routes');
loginRoute(app);

const getNewerTokenRoute = require('./app/routes/auth/getNewerToken.routes');
getNewerTokenRoute(app);

const logoutRoute = require('./app/routes/auth/logout.routes');
logoutRoute(app);

app.listen(process.env.BE_AUTH_PORT, () => {
    console.log(`Auth Server is running on port ${process.env.BE_AUTH_PORT}`);
});
