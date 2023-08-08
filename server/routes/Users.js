import express from "express";
import userModel from "../models/userModel.js";
import { verify } from "crypto";

const userroute = express.Router()

//GET ALL USER DETAILS
userroute.get("/users", async (req, res) => {
    try {
        const allusers = await userModel.find();
        if (allusers) {
            res.status(200).send({ success: true, message: "User Found", allusers });
        } else {
            res.status(404).send({ success: false, message: "User Not Found" });
        }
    } catch (error) {
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});

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

// //UPDATE USER DETAILS
// userroute.put("/user/update/:id", async (req, res) => {
//     if (req.body._id === req.params.id) {
//         if (req.body.password) {
//             try {
//                 const salt = await bcrypt.genSalt(10);
//                 req.body.password = await bcrypt.hash(req.body.password, salt);
//             } catch (error) {
//                 res.status(500).send({ success: false, message: "User Not Found" });
//             }
//         }
//         try {
//             const update = await userModel.findByIdAndUpdate(req.params.id, {
//                 $set: req.body,
//             });
//             res.status(200).send({ success: true, message: "User is updated successfully", update });
//         } catch (error) {
//             res.status(500).send({ success: false, message: "User Not Found" });
//         }
//     } else {
//         res.status(403).send({ success: false, message: "You can only update your details" });
//     }
// })

// UPDATE USER DETAILS
userroute.put("/user/update/:id", async (req, res) => {
    if (req.body._id === req.params.id) {
        // if (req.body.password) {
        //     try {
        //         const salt = await bcrypt.genSalt(10);
        //         req.body.password = await bcrypt.hash(req.body.password, salt);
        //     } catch (error) {
        //         res.status(500).send({ success: false, message: "User Not Found" });
        //     }
        // }

        const user = await userModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });

        if (user) {
            res.status(200).send({ success: true, message: "User is updated successfully", user });
        } else {
            res.status(404).send({ success: false, message: "User Not Found" });
        }
    } else {
        res.status(403).send({ success: false, message: "You can only update your details" });
    }
});

//delete User
userroute.delete("/user/delete/:id", async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).send({ success: false, message: "User Not Found" });
        }
        const delUser = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).send({ success: true, message: "User is deleted successfully", delUser });
    } catch (error) {
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});

export default userroute;
