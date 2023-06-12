import adoptReqModel from "../../models/adoptReqModel.js";

const updateReq= async (req, res) => {
    if (req.body.reqId === req.params.id) {
        try {
            const update = await adoptReqModel.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).send({ success: true, message: "Request is updated successfully", update });
        } catch (error) {
            res.status(500).send({ success: false, message: "Request Not Found" });
        }
    } else {
        res.status(403).send({ success: false, message: "Internal Server Error" });
    }
}

export default updateReq
