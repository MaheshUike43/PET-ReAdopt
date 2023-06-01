import express from "express";

import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const userroute = express.Router()

//GET USER DETAILS
userroute.get("/user/:id", async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      if (user) {
        res.status(200).send({ success: true, message: "User Found", user });
      } else {
        res.status(404).send({ success: false, message: "User Not Found" });
      }
    } catch (error) {
      res.status(500).send({ success: false, message: "Internal Server Error" });
    }
  });


//UPDATE USER DETAILS
userroute.put("/user/update/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                res.status(500).send({ success: false, message: "User Not Found" });
            }
        }
        try {
            const user = await userModel.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).send({ success: true, message: "User is updated successfully", user });
        } catch (error) {
            res.status(500).send({ success: false, message: "User Not Found" });
        }
    }else {
        res.status(403).send({ success: false, message: "You can only update your details" });
    }
})


//DELEET USER DETAILS
userroute.delete("/user/delete/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await userModel.findByIdAndDelete(req.params.id)
            res.status(200).send({ success: true, message: "Account is deleted successfully", user });
        } catch (error) {
            res.status(500).send({ success: false, message: "Account Not Found" });
        }
    } else {
        res.status(403).send({ success: false, message: "You can only delete your account" });
    }
})

export default userroute;


