import petsModel from "../../models/petsModel.js";

const petDetails = async (req, res) => {
    try {
      const pet = await petsModel.findById(req.params.id)
      if (pet) {
        res.status(200).send({ success: true, message: "Pet Found", pet });
      } else {
        res.status(404).send({ success: false, message: "Pet Not Found" });
      }
    } catch (error) {
      res.status(500).send({ success: false, message: "Internal Server Error" });
    }
  }

export default petDetails
