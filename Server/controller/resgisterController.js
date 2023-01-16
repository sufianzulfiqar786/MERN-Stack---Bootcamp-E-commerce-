// import { response } from 'express'
import registerUser from "../schema/resgisterSchema.js";

export const registerData = async (req, res) => {
  // const {fullname,username,email,number} = req.body;
  const username = req.body.username
  console.log(username)



  const user = {
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    number:req.body.number
  };

  var myData = new registerUser(user);
  console.log("user", user);
  console.log("myData", myData);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
};


export const getregisterdata = async (req, res) => {
  try {
    const phone = await registerUser.find({}); // find just search all
    if (phone) {
      // res.status(404).json({message: error.message})
      res.json({ message: "successfully get phone", phone });
      console.log("in conroller phone");
    }
  } catch (error) {
    console.log("Error in get api from server side", error);
  }
};
