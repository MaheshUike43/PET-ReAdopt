import express from "express";
import petsModel from "../models/petsModel.js";

const petRoute = express.Router()

//Add Pet
petRoute.post("/pets", async (req, res) => {
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
})

//Selected Pet Details 
petRoute.get("/petsDetail/:id", async (req, res) => {
    try {
        const pet = await petsModel.findById(req.params.id)
        if (pet) {
            // console.log(pet)
            res.status(200).send({ success: true, message: "Pet Found", pet });
        } else {
            const error = new Error("Pet Not Found");
            error.status = 404;
            throw error;
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
            const error = new Error("Pet Not Found");
            error.status = 404;
            throw error;
        }
    } catch (error) {
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
})

//update Pets
petRoute.put("/pet/update/:id", async (req, res) => {
    const pet = await petsModel.findById(req.params.id);
    if (pet) {
        try {
            const updatePet = await petsModel.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });

            res.status(200).send({ success: true, message: "Pet is updated successfully", updatePet });
        } catch (error) {
            res.status(500).send({ success: false, message: "Error Updating pet" });
        }
    } else {
        const error = new Error("Pet Not Found");
        error.status = 404;
        throw error;
    }
})

//delete Pets
petRoute.delete("/pet/delete/:id", async (req, res) => {
    try {
        const pet = await petsModel.findById(req.params.id);
        if (!pet) {
            return res.status(404).send({ success: false, message: "Pet Not Found" });
        }
        const delPet = await petsModel.findByIdAndDelete(req.params.id);
        res.status(200).send({ success: true, message: "Pet is deleted successfully", delPet });
    } catch (error) {
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});


export default petRoute;