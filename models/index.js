const config = require('../config/db.config')

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DB, config.USER , config.PASSWORD , {
    host: config.HOST,
    dialect: config.dialect,
    dialectOptions: {
        ssl:{
            required:true,
            rejectUnauthorized:false,
        }
    },
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
    }
});

const db = {};
db.Sequelize = Sequelize,
db.sequelize = sequelize,

db.user = require("./user.model")(sequelize,Sequelize);
db.role = require("./role.model")(sequelize,Sequelize);
db.refreshToken = require("./refreshToken.model")(sequelize,Sequelize);

//1
db.role.belongsToMany(db.user, {
    through: "user_roles"
})
//2
// Test
db.user.belongsToMany(db.role, {
    through: "user_roles"
})

db.refreshToken.belongsTo(db.user, {
    foreignKey: "userId",
    targetkey:"id"
})

db.user.hasOne(db.refreshToken, {
    foreignKey: "userId",
    targetkey:"id"
})

db.ROLES = ["user","admin"]

module.exports = db;
