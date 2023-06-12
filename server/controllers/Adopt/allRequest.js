import adoptReqModel from "../../models/adoptReqModel.js";


const allRequest = async (req, res) => {
    try {
      const allRequest = await adoptReqModel.find()
      if (allRequest) {
        res.status(200).send({ success: true, message: "Request Found", allRequest});
      } else {
        res.status(404).send({ success: false, message: "Request Not Found" });
      }
    } catch (error) {
      res.status(500).send({ success: false, message: "Internal Server Error" });
    }
  }

export default allRequest
