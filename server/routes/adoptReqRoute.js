import express from "express";
import adoptReqModel from '../models/adoptReqModel.js'

const Request = express.Router()

//Adoption Request
Request.post("/adopt-request", async (req, res) => {
    try {
      const { pet_id, user_id } = req.body;
  
      if (!pet_id) {
        return res.status(400).send({ success: false, message: "Please provide pet ID" });
      }
      if (!user_id) {
        return res.status(400).send({ success: false, message: "Please provide user ID" });
      }
  
      // CREATE NEW ADOPTION REQUEST
      const newRequest = { pet_id, user_id };
      const adoptionRequest = await adoptReqModel.create(newRequest);
  
      res.status(200).send({ success: true, message: "Adoption request created successfully", adoptionRequest });
    } catch (error) {
      console.error(error);
      res.status(500).send({ success: false, message: "Error creating adoption request" });
    }
  })

export default Request;