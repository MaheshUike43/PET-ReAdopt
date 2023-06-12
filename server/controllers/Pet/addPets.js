import petsModel from "../../models/petsModel.js";

const addPets = async (req, res) => {
    try {
        const { pet_type, pet_name, breed, age, gender, photo, desc, status } = req.body;

        if (!pet_type || !pet_name || !breed || !age || !gender || !photo || !desc || !status) {
            return res.status(400).send({ success: false, message: "Please fill-up all details" });
        }

        //CREATE NEW PET
        const newPet = { pet_type, pet_name, breed, age, gender, photo, desc, status };
        const pet = await petsModel.create(newPet);

        res.status(200).send({ success: true, message: "Pet is Added successfully", pet });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Error Adding pet" });
    }
}

export default addPets
