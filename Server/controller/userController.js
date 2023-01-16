// import { response } from 'express'
import User from "../schema/userSchema.js";

export const addPhoneData = async (req, res) => {
  const { fname } = req.body;
  const { filename } = req.file;

  console.log("req. body", req.body, "req.file", req.file);

  const user = {
    phoneName: req.body.phoneName,
    brandName: req.body.brandName,
    phoneCamera: req.body.phoneCamera,
    phoneWeight: req.body.phoneWeight,
    phonePrice: req.body.phonePrice,
    phoneImage: req.file.filename,
  };

  var myData = new User(user);
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
  //   User.create(user);
  //   myData.save(user, (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     if (result) {
  //       console.log(result);
  //     }
  //   });
  //   .then(item => {
  //     res.send("item saved to database");
  //   })
  //   .catch(err => {
  //     res.status(400).send("unable to save to database");
  //   });
  // if(!fname || !filename){
  //     res.status(422).json({status:422,message:"fill all the details"})
  // }

  // const user = req.body
  // console.log(user)

  // const newUser = new User(filename.path)

  //   try {
  //     await User.save(user);
  //     res.status(201).json(newUser);
  //   } catch (error) {
  //     res.status(409).json({ message: error.message });
  //   }
};

export const getPhoneData = async (req, res) => {
  try {
    const phone = await User.find({}); // find just search all
    if (phone) {
      // res.status(404).json({message: error.message})
      res.json({ message: "successfully get phone", phone });
      console.log("in conroller phone");
    }
  } catch (error) {
    console.log("Error in get api from server side", error);
  }
};

export const getEditPhone = async (req, res) => {
  console.log(req.params.id);
  try {
    const phone = await User.find({ _id: req.params.id }); // find just search id
    // const phone = await User.findById({req.params.id})   // not working here
    res.status(200).json(phone[0]);
  } catch (error) {}
};

export const editPhoneData = async (req, res) => {
  let user = req.body;
  const editPhone = new User(user);
  console.log("edit suf", editPhone);
  try {
    console.log("rew", req.params.id);
    await User.updateOne({ _id: req.params.id }, editPhone);
    res.status(201).json(editPhone);
  } catch (error) {
    console.log("Error in EditPhone Data from server side", error);
  }
};

export const deletePhoneDetail = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.send({message: "Phone deleted"});
  } catch (error) {
    console.log("Error in Delete API from back end", error);
  }
};
