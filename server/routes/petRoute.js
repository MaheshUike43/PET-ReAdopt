import express from "express";
import petsModel from "../models/petsModel.js";

const petRoute = express.Router()

//Add Pet
petRoute.post("/pets", async (req, res) => {
    try {
      const { pet_type, pet_name, breed, age, gender, photo, desc, status } = req.body;
  
      if (!pet_type) {
        return res.status(400).send({ success: false, message: "Please enter pet type" });
      }
      if (!pet_name) {
        return res.status(400).send({ success: false, message: "Please enter pet name" });
      }
      if (!breed) {
        return res.status(400).send({ success: false, message: "Please enter pet breed" });
      }
      if (!age) {
        return res.status(400).send({ success: false, message: "Please enter pet age" });
      }
      if (!gender) {
        return res.status(400).send({ success: false, message: "Please enter pet gender" });
      }
      if (!photo) {
        return res.status(400).send({ success: false, message: "Please upload a pet photo" });
      }
      if (!desc) {
        return res.status(400).send({ success: false, message: "Please enter pet description" });
      }
      if (!status) {
        return res.status(400).send({ success: false, message: "Please enter pet status" });
      }
  
      //CREATE NEW PET
      const newPet = { pet_type, pet_name, breed, age, gender, photo, desc, status };
      const pet = await petsModel.create(newPet);
  
      res.status(200).send({ success: true, message: "Pet is Added successfully", pet });
    } catch (error) {
      console.error(error);
      res.status(500).send({ success: false, message: "Error Adding pet" });
    }
  })

petRoute.get("/petsDetail", async (req, res) => {
    try {
      const pet = await petsModel.find(req.params)
      if (pet) {
        res.status(200).send({ success: true, message: "Pet Found", pet });
      } else {
        res.status(404).send({ success: false, message: "pet Not Found" });
      }
    } catch (error) {
      res.status(500).send({ success: false, message: "Internal Server Error" });
    }
  })

export default petRoute;