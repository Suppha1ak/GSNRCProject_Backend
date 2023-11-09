const {dataType, DataTypes} = require("sequelize");
const sequelize = require("./db");

// creat id,brand,model,price
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
    image :{
        type: DataTypes.STRING,
        allowNull: false
    },
    primaryColor :{
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

//create database by sequelize and Delete table
/*  carcenter.sync({force:true}).then(() => {
    console.log("Table is Create");
}).catch((error) => {
    console.error("Error! Not create table");
})  */

module.exports = carcenter;
