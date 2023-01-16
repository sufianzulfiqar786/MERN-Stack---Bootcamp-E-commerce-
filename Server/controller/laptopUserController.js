// import { response } from 'express'
import User from "../schema/laptopUserSchema.js";

export const addLaptopData = async (req, res) => {
  const user = req.body;
  // console.log(user)

  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getLaptopData = async (req, res) => {
  try {
    const laptop = await User.find({});
    if (laptop) {
      // res.status(404).json({message: error.message})
      res.json({ message: "successfully get laptops", laptop });
      console.log("in conroller laptop");
    }
  } catch (error) {
    console.log("Error in get api from server side", error);
  }
};

export const getEditLaptop = async (req, res) => {
  console.log(req.params.id);
  try {
    const phone = await User.find({ _id: req.params.id }); // find just search id
    // const phone = await User.findById({req.params.id})   // not working here
    res.status(200).json(phone[0]);
  } catch (error) {}
};

export const editLaptopData = async (req, res) => {
  let user = req.body;
  const editLaptop = new User(user);
  console.log("edit suf", editLaptop);

  try {
    console.log("rew", req.params.id);
    await User.updateOne({ _id: req.params.id }, editLaptop);
    res.status(201).json(editLaptop);
  } catch (error) {
    console.log("Error in editLaptop Data from server side", error);
  }
};


export const deleteLaptopDetail = async(req, res) =>{
  try{
await User.deleteOne({_id: req.params.id})
  }catch(error){
      console.log("Error in Delete API from back end", error)
  }
}