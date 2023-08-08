import express from "express";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';

const authRoute = express.Router();

// Register New User
authRoute.post("/register", async (req, res) => {
    try {
        const { name, email, password, cpassword, phone_number, address } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User is Already Registered" });
        } else if (password !== cpassword) {
            return res.status(400).json({ success: false, message: "Password Not Match" });
        } else {
            // Encrypt Password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create new user
            const newUser = new userModel({
                name,
                email,
                password: hashedPassword,
                cpassword: hashedPassword,
                phone_number,
                address,
            });
            const user = await newUser.save();
            res.status(200).json({ success: true, message: "User is Registered Successfully", user });
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to Registerd" });
    }
});

// Login User
authRoute.post("/login", async (req, res) => {
    try {
        // const { email, password } = req.body;
        const user = await userModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const accesstoken = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin},
            process.env.MY_KEY,
            {expiresIn: "5d"}
        );

        const {password, ...info} = user._doc;

        res.status(200).json({...info, accesstoken});

        // const token = await user.generateAuthToken();

        // res.json({ success: true, message: 'User Logged In Successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in. Please try again.' });
    }
});

export default authRoute;
