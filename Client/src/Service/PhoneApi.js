import axios from "axios";

const url = "http://localhost:8000/front";

export const addPhone = async (data) => {

  const ImagePhoneData = new FormData()
        

        // data = ImagePhoneData.append('imagePhone', phoneUsers)

  try {
    console.log("Phone Data", data);
    return await axios.post(`${url}/addphonedata`, data);
  } catch (error) {
    console.log("Error in Add Phone Api", error);
  }
};

export const getPhone = async () => {

  

  try {
    const res = await axios.get(`${url}/phone`);
    console.log("res: ", res.data);
    return res.data;
  } catch (error) {
    console.log("Error in get phone api", error);
  }
};


export const getRegister = async () => {

  try {
    const res = await axios.get(`${url}/getregisterdata`);
    console.log("res: ", res.data);
    return res.data;
  } catch (error) {
    console.log("Error in get phone api", error);
  }
};

export const getEditPhone = async (id) => {
  try {
    return await axios.get(`${url}/geteditphone/${id}`);
  } catch (error) {
    console.log("Error in EditPhone GetApi", error);
  }
};

export const EditPhone = async (user, id) => {
  try {
    return await axios.post(`${url}/editphone/${id}`, user);
  } catch (error) {
    console.log("Error in Edit Api", error);
  }
};

export const  deletePhoneDetail = async(id) =>{
  try{
  return await axios.delete(`${url}/phone/${id}`)
  }catch(error){
    console.log("Error in delete API from front end", error)
  }
}