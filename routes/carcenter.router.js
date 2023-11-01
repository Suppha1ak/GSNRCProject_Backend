const express = require("express");
const router = express.Router();
const Carcenter = require("../controller/carcenter.controller");
const {authJWT} = require("../middleware");

// http://localhost:5000/Carcenter
router.post("/Carcenters",[authJWT.verifyToken, authJWT.isAdmin], async (req, res) => {
  try {
    const newCarcenter = req.body;
    const createCarcenter = await Carcenter.createCarcenter(newCarcenter);
    res.status(201).json(createCarcenter);
  } catch (error) {
    res.status(500).json({ error: "Failed to create Car" });
  }
});

router.put("/Carcenters/:id",[authJWT.verifyToken, authJWT.isAdmin], async (req, res) => {
  try {
    const carcenterId = Number.parseInt(req.params.id);
    const newcarcenter = req.body;
    const updateResult = await Carcenter.updateCarcenter(
      carcenterId,
      newcarcenter
    );
    if (updateResult[0] === 0) {
      return res.status(404).json({ error: "Carcenter not_found" });
    }
    res.status(201).json({ message: "Car updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update Carcenter" });
  }
});

router.get("/Carcenters", async (req, res) => {
  try {
    const ShowCarcenter = await Carcenter.getAll();
    res.status(201).json(ShowCarcenter);
  } catch (error) {b
    res.status(500).json({ error: "Failed to Show Carcenter" });
  }
});

router.get("/Carcenters/:id",[authJWT.verifyToken], async (req, res) => {
  try {
    const carcenterId = Number.parseInt(req.params.id);
    const searchResult = await Carcenter.getOne(carcenterId);
    if (searchResult[0] === 0) {
      return res.status(404).json({ error: "Carcenter not_found" });
    }
    res.status(201).json(searchResult);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to Search Carcenter" });
  }
});

router.delete("/Carcenters/:id",[authJWT.verifyToken, authJWT.isAdmin], async (req, res) => {
  try {
    const carcenterId = Number.parseInt(req.params.id);
    const deleteIDResult = await Carcenter.Delete(carcenterId);
    res.status(201).json({
        message: "Carcenter Delete successfully CAR NO." + carcenterId,
      });
  } catch (error) {
    if (error.kind === "not_found") {
      res.status(404).json({ error: "Carcenters is not_found" });
    } else {
      console.log(error);
      res.status(500).json({ error: "Failed to Delete Carcenters" });
    }
  }
});
module.exports = router;
