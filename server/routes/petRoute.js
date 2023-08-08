import express from "express";
import petsModel from "../models/petsModel.js";
import verify from "../verifyToken.js";

const petRoute = express.Router()

//Add Pet
petRoute.post("/pets",verify, async (req, res) => {
    // console.log(req.user);
        if(req.user.isAdmin){

            try {
                const { pet_type, pet_name, breed, age, gender, photo, desc, status } = req.body;
        
                //CREATE NEW PET
                const newPet = { pet_type, pet_name, breed, age, gender, photo, desc, status };
                const pet = await petsModel.create(newPet);
        
                res.status(200).send({ success: true, message: "Pet is Added successfully", pet });
            } catch (error) {
                console.error(error);
                res.status(500).send({ success: false, message: "Error Adding pet" });
            }
        }else{
            res.status(403).json("You are not authenticated admin")
        }
})

//Selected Pet Details 
petRoute.get("/petsDetail/:id", async (req, res) => {
    try {
        const pet = await petsModel.findById(req.params.id)
        if (pet) {
            // console.log(pet)
            res.status(200).send({ success: true, message: "Pet Found", pet });
        } else {
            res.status(404).send({ success: false, message: "Pet Not Found" });
        }
    } catch (error) {
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
})

//All Pet Details
petRoute.get("/allPetsDetail", async (req, res) => {
    try {
        const allpets = await petsModel.find()
        if (allpets) {
            res.status(200).send({ success: true, message: "Pet Found", allpets });
        } else {
            res.status(404).send({ success: false, message: "Pet Not Found" });
        }
    } catch (error) {
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
})

//update Pets
petRoute.put("/pet/update/:id",verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatePet = await petsModel.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            },
            {new: true});
            // console.log(updatePet)
            res.status(200).send({ success: true, message: "Pet is updated successfully", updatePet });
        } catch (error) {
            res.status(500).send({ success: false, message: "Pet Not Found" });
        }
    } else {
        res.status(403).send({ success: false, message: "Internal Server Error" });
    }
})

//DELETE Pets
petRoute.delete("/pet/delete/:id", verify, async (req, res) => {
    if (req.body._id === req.params.id || req.user.isAdmin) {
        try {
            const deletePet = await petsModel.findByIdAndDelete(req.params.id)
            res.status(200).send({ success: true, message: "Pet is deleted successfully", deletePet });
        } catch (error) {
            res.status(500).send({ success: false, message: "Pet Not Found" });
        }
    } else {
        res.status(403).send({ success: false, message: "You Are not Authorized user" });
    }
})

export default petRoute;