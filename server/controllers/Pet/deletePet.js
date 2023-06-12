import petsModel from "../../models/petsModel.js";

const deletePet = async (req, res) => {
    if (req.body.petId === req.params.id) {
        try {
            const deletepet = await petsModel.findByIdAndDelete(req.params.id)
            res.status(200).send({ success: true, message: "Pet is deleted successfully", deletepet });
        } catch (error) {
            res.status(500).send({ success: false, message: "Pet Not Found" });
        }
    } else {
        res.status(403).send({ success: false, message: "Internal Server Error" });
    }
}

export default deletePet
