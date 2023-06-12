import petsModel from "../../models/petsModel.js";

const allPet = async (req, res) => {
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
  }

export default allPet
