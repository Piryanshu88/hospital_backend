const express = require("express");
const { HospitalModel } = require("../model/Hospital.model");
const HospitalRouter = express.Router();

// get all food  data
HospitalRouter.get("/", async (req, res) => {
  const zone = req.query.zone;
  const q = req.query.q;
  try {
    if (q && zone) {
      const food = await HospitalModel.find({
        zone: zone,
        hospital_name: { $regex: q, $options: "$i" },
      });
      res.send(food);
    } else if (zone) {
      const food = await HospitalModel.find({ zone: zone });
      res.send(food);
    } else {
      const food = await HospitalModel.find();
      res.send(food);
    }
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

// get data by id
HospitalRouter.get("/:id", async (req, res) => {
  try {
    const food = await HospitalModel.find({ _id: req.params.id });
    res.send(food);
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});
HospitalRouter.post("/add", async (req, res) => {
  try {
    const food = await HospitalModel(req.body);
    food.save();
    res.send("Data added successfully");
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

HospitalRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await HospitalModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send("Data updated successfullly ");
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});

HospitalRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await HospitalModel.findByIdAndDelete({ _id: id });
    res.send("Data deleted successfullly ");
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
});
module.exports = {
  HospitalRouter,
};
