const Carcenter = require("../models/carcenter.model");
//Insert Data
Carcenter.createCarcenter = async(newCarcenter)=>{
    try {
        const createCarcenter = await Carcenter.create(newCarcenter);
        console.log("create carcenter" , createCarcenter.toJSON());
        return createCarcenter.toJSON();
    } catch (error) {
        console.log("err",err);
        throw err;
    }
}

Carcenter.updateCarcenter = async (carcenterId, newCarcenter) => {
  try {
    const updatedCarcenter = await Carcenter.update(
      newCarcenter,
      { where: { id: carcenterId } }
    );
    return updatedCarcenter;
  } catch (error) {
    console.log("err", error);
    throw error;
  }
};


Carcenter.getAll = async() => {
  console.log("HelloPass1");
  try {
    const carcenters = await Carcenter.findAll();
    console.log("ShowAll carcenter");
    return carcenters.map(carcenter => carcenter.toJSON())
  } catch (error) {
      console.log("err", error);
      throw error;
  }
};

Carcenter.getOne = async (carcenterId) => {
  try {
    const searchByID = await Carcenter.findOne( //Or Restaurant.ByPk
      { where: { id: carcenterId } }
    );
    return searchByID.toJSON();
  } catch (error) {
    console.log("err", error);
    throw error;
  }
};

Carcenter.Delete = async (carcenterId) => {
  try {
    const DestroyCar = await Carcenter.destroy(
      { where: { id: carcenterId } }
    );
    if(DestroyCar === 0){
      throw{kind : "not_found"}
    }
    return DestroyCar;
  } catch (error) {
    console.log("err", error);
    throw error;
  }
};

module.exports = Carcenter;