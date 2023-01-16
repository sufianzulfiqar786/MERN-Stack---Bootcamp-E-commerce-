import React from 'react'
import {Link } from "react-router-dom";
import '../CSS/LaptopPage.css'
import {getPhone, deletePhoneDetail} from '../Service/PhoneApi'
import { useEffect, useState } from "react";
import Header from '../Components/Header';

const PhonePage = () => {

  const [pphone, setPphone] = useState();

  // useEffect(()=>{
  //   console.log("laptop: ", phone);
  // },[phone])
  
  useEffect(() => {
  
    getAllPhone();
  
  }, [])
  
  const getAllPhone = async () =>{
    let res = await getPhone()
    console.log("resssssss: ", res.phone);
    setPphone(res.phone);
  }
  
  const deletePhone = async (id) =>{
  console.log("Deleting phone")
await deletePhoneDetail(id)
console.log("after deleting phone")
    getAllPhone()
  }


  return (
    <>
<Header />
{/* <div className="fluid-container d-flex justify-content-end mx-4 my-3">

     <Link to="/addphonedata">

<button className='AddLaptopAndPhoneBtn'>Add Phone</button>

     </Link>
     </div> */}



<div className="fluid-container ">

<div className="d-flex justify-content-end mx-4 my-3">


<Link to="/addphonedata">

<button className='AddLaptopAndPhoneBtn'>Add Phone</button>

     </Link>

</div>

<div className="row">

<div className="col-12">

<table >
  <tr >
    <th className='cell px-3 mx-3'>ID</th>
    <th className='cell px-3 mx-3'>Phone Name</th>
    <th className='cell px-3 mx-3'>Brand Name</th>
    <th className='cell px-3 mx-3'>Phone Camera</th>
    <th className='cell px-3 mx-3'>Brand Weight</th>
    <th className='cell px-3 mx-3'>Brand Price</th>
    <th className='cell px-3 mx-3'>Phone Images</th>
  </tr>

  
{pphone && pphone.map((pphone)=>
(  
<tr >
  <th className='cell px-3 mx-3'>{pphone._id}</th>
  <th className='cell px-3 mx-3'>{pphone.brandName}</th>
  <th className='cell px-3 mx-3'>{pphone.phoneName}</th>
  <th className='cell px-3 mx-3'>{pphone.phoneCamera}mp</th>
  <th className='cell px-3 mx-3'>{pphone.phoneWeight}g</th>
  <th className='cell px-3 mx-3'>{pphone.phonePrice}$</th>
  <th className='cell px-3 mx-3'><img style={{width:"90px", height:"90px"}} className='my-2' src={`http://localhost:8000/images/${pphone.phoneImage}`} alt="img error" /></th>

  <th className='cell px-1 mx-1'>
  
 <div className="row">
 
 <div className="col-12 my-2 d-flex justify-content-center ">
 
 <Link to={`editphonedata/${pphone._id}`}> <button className='editDeleteBtn'>Edit</button>   </Link>
  
  
  </div>
  
  <div className="col-12 my-2 d-flex justify-content-center ">
  <button className='editDeleteBtn' onClick={()=>{deletePhone(pphone._id)}} >Delete</button>
  
  </div>
 
 </div>
  
  </th>
</tr>
))

}

  
</table> 

</div>

</div>

</div>



    </>
  )
}

export default PhonePage
