const {dataType, DataTypes} = require("sequelize");
const sequelize = require("./db");

const carcenter = sequelize.define("carcenter",{
    id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    brand :{
        type: DataTypes.STRING,
        allowNull: false
    },
    model :{
        type: DataTypes.STRING,
        allowNull: false
    },
    price :{
        type: DataTypes.STRING,
        allowNull: false
    },
    images :{
        type: DataTypes.STRING,
        allowNull: false
    },
    firstprimarycolor :{
        type: DataTypes.STRING,
        allowNull: true
    },
    secondprimarycolor :{
        type: DataTypes.STRING,
        allowNull: true
    },
    thirdprimarycolor :{
        type: DataTypes.STRING,
        allowNull: true
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
carcenter.sync({force:true}).then(() => {
    console.log("Table is Create");
}).catch((error) => {
    console.error("Error! Not create table");
})

module.exports = carcenter;
