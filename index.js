const dbConfig = require("../config/db.config.js");
const dbconfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

//inicializar objeto ORM (Object-Relational Mapping):
const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        operatorsAliases:false,
        pool:{
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle: dbconfig.pool.idle
        }
    }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./user.model.js");
db.product = require("./product.model.js");

module.exports = db;
