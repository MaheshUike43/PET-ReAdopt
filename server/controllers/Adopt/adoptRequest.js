import adoptReqModel from "../../models/adoptReqModel.js";

const adoptRequest = async (req, res) => {
    try {
      const { pet_id, pet_name, breed, age, gender, photo, user_id, name, email, phone_number, address} = req.body;
  
      // CREATE NEW ADOPTION REQUEST
      const newRequest = { pet_id, pet_name, breed, age, gender, photo, user_id, name, email, phone_number, address };
      const adoptionRequest = await adoptReqModel.create(newRequest);
  
      res.status(200).send({ success: true, message: "Adoption request created successfully", adoptionRequest });
    } catch (error) {
      console.error(error);
      res.status(500).send({ success: false, message: "Error creating adoption request" });
    }
  }

export default adoptRequest
