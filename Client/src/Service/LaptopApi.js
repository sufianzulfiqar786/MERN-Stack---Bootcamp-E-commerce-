import axios from "axios";

const url = "http://localhost:8000/front";
export const addLaptop = async (data) => {
  try {
    console.log("Laptop Data", data);
    return await axios.post(`${url}/addlaptopdata`, data);
  } catch (error) {
    console.log("Error in Add Laptop Api", error);
  }
};

export const getlaptop = async () => {
  try {
    const res = await axios.get(`${url}/laptop`);
    console.log("res: ", res.data);
    return res.data;
  } catch (error) {
    console.log("Error in get laptop api", error);
  }
};

export const getLaptopPhone = async (id) => {
  try {
    return await axios.get(`${url}/getlaptopphone/${id}`);
  } catch (error) {
    console.log("Error in EditPhone GetApi", error);
  }
};

export const EditLaptop = async (user, id) => {
  try {
    return await axios.post(`${url}/editlaptop/${id}`, user);
  } catch (error) {
    console.log("Error in Edit Api", error);
  }
};


export const  deleteLaptopDetail = async(id) =>{
  try{
return await axios.delete(`${url}/laptop/${id}`)
  }catch(error){
    console.log("Error in delete API from front end", error)
  }
}