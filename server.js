const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Models
const db = require('./app/models');

const app = express();

// let whiteList = ['http://localhost:8081'];
// let corsOptions = {
//     origin: function (origin, callback) {
//         if (whiteList.indexOf(origin) !== -1 || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Sync database
db.sequelize.sync();

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Portofolio REST API' });
});

const profileRoute = require('./app/routes/table-based/profile.routes');
const menuRoute = require('./app/routes/table-based/menu.routes');
const introRoute = require('./app/routes/table-based/intro.routes');
const socialMediaRoute = require('./app/routes/table-based/socialMedia.routes');
const articleRoute = require('./app/routes/table-based/article.routes.js');
const experieceRoute = require('./app/routes/table-based/experience.routes.js');

profileRoute(app);
menuRoute(app);
introRoute(app);
socialMediaRoute(app);
articleRoute(app);
experieceRoute(app);

const getNavbar = require('./app/routes/component-based/getNavbar.routes.js');
getNavbar(app);

app.listen('8081', () => {
    console.log('Server is running on port 8081');
});
