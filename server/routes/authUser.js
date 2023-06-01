import express from "express";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const authroute = express.Router()

//Register New
authroute.post("/register", async (req, res) => {
    try {
        //Encrypt Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const { name, email, password, phone_number, address } = req.body;

        if (!name) {
            return res.status(400).send({ success: false, message: "Please enter name" });
        }
        if (!email) {
            return res.status(400).send({ success: false, message: "Please enter email" });
        }
        if (!password) {
            return res.status(400).send({ success: false, message: "Please enter password" });
        }
        if (!phone_number) {
            return res.status(400).send({ success: false, message: "Please enter number" });
        }
        if (!address) {
            return res.status(400).send({ success: false, message: "Please enter address" });
        }

        //CHECK EMAIL
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ success: false, message: "User is already registered" });
        }

        //CREATE NEW USER
        const newUser = new userModel({ name, email, password: hashedPassword, phone_number, address });
        const user = await newUser.save();
        res.status(200).send({ success: true, message: "User is registered successfully", user });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Error creating user" });
    }
})

//Login
authroute.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).send({ success: false, message: "Please enter email" });
        }
        if (!password) {
            return res.status(400).send({ success: false, message: "Please enter password" });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).send({ success: false, message: "Invalid Email" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ success: false, message: "Invalid Password" });
        }

        res.status(200).send({ success: true, message: "User is logged in successfully", user});
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Error logging in user" });
    }
})

export default authroute;

