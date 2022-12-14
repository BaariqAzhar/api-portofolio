const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.profile = require('./profile.model.js')(sequelize, Sequelize);
db.menu = require('./menu.model.js')(sequelize, Sequelize);
db.intro = require('./intro.model.js')(sequelize, Sequelize);
db.socialMedia = require('./socialMedia.model.js')(sequelize, Sequelize);
db.article = require('./article.model.js')(sequelize, Sequelize);
db.experiece = require('./experience.model.js')(sequelize, Sequelize);

db.auth = require('./auth.model.js')(sequelize, Sequelize);
db.refreshToken = require('./refreshToken.model.js')(sequelize, Sequelize);

module.exports = db;
