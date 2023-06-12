import petsModel from "../../models/petsModel.js";

const updatePet = async (req, res) => {
    if (req.body.petId === req.params.id) {
        try {
            const update = await petsModel.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).send({ success: true, message: "Pet is updated successfully", update });
        } catch (error) {
            res.status(500).send({ success: false, message: "Pet Not Found" });
        }
    } else {
        res.status(403).send({ success: false, message: "Internal Server Error" });
    }
}

export default updatePet
