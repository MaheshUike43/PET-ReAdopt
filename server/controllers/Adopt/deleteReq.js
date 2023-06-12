import adoptReqModel from "../../models/adoptReqModel.js";

const deleteReq = async (req, res) => {
    if (req.body.reqId === req.params.id) {
        try {
            const deletereq = await adoptReqModel.findByIdAndDelete(req.params.id)
            res.status(200).send({ success: true, message: "Request is deleted successfully", deletereq });
        } catch (error) {
            res.status(500).send({ success: false, message: "Request Not Found" });
        }
    } else {
        res.status(403).send({ success: false, message: "Internal Server Error" });
    }
}

export default deleteReq
