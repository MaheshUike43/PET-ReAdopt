import userModel from "../../models/userModel.js";

const allUsers = async (req, res) => {
    try {
      const allusers = await userModel.find()
      if (allusers) {
        res.status(200).send({ success: true, message: "User Found", allusers });
      } else {
        res.status(404).send({ success: false, message: "User Not Found" });
      }
    } catch (error) {
      res.status(500).send({ success: false, message: "Internal Server Error" });
    }
  }

export default allUsers
