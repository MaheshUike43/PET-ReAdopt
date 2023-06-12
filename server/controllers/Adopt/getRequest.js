import adoptReqModel from "../../models/adoptReqModel.js";

const adoptReqDetials = async (req, res) => {
    try {
        const viewreq = await adoptReqModel.findById(req.params.id);
        if (viewreq) {
            res.status(200).send({ success: true, message: "Request Found", viewreq });
        } else {
            res.status(404).send({ success: false, message: "Request Not Found" });
        }
    } catch (error) {
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
}

export default adoptReqDetials
