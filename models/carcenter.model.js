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
carcenter.sync({force:false}).then(() => {
    console.log("Table is Create");
    initial()
}).catch((error) => {
    console.error("Error! Not create table");
})

function initial() {
    carcenter.create({
        id:1,
        brand: "Ferrari",
        model: " 488 Pista Spider",
        images:"https://images.autofun.co.th/file1/72f975ad19f342e2980068566d226ecc_606x402.jpg",
        firstprimarycolor:"#000",
        secondprimarycolor:"#000",
        thirdprimarycolor:"#000"
    });
}

module.exports = carcenter;
