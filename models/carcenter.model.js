const {dataType, DataTypes} = require("sequelize");
const sequelize = require("./db");

const carcenter = sequelize.define("carcenter",{
    id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name :{
        type: DataTypes.STRING,
        allowNull: false
    },
    type :{
        type: DataTypes.STRING,
        allowNull: false
    },
    Img :{
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
});

// create database by sequelize
carcenter.sync({force:false}).then(() => {
    console.log("Table is Create");
}).catch((error) => {
    console.error("Error! Not create table");
})

module.exports = carcenter;
