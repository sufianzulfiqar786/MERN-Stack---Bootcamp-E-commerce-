import React from 'react'
import {Link } from "react-router-dom";
import '../CSS/LaptopPage.css'
import {getlaptop, deleteLaptopDetail} from '../Service/LaptopApi'
import { useEffect, useState } from "react";
import Header from '../Components/Header';


const LaptopPage = () => {


const [laptop, setLaptop] = useState();

const [flag, setFlag] = useState(false);

// useEffect(()=>{
//   console.log("laptop: ", laptop);
// },[laptop])

useEffect(() => {

  getAllLaptop();

}, [flag])

const getAllLaptop = async () =>{
  let res = await getlaptop()
  console.log("resssssss: ", res);
  setLaptop(res.laptop);
  setFlag(true)
 
}

const deleteLaptop = async (id) =>{
  await deleteLaptopDetail(id)
  setFlag(false)
}

  return (
    <>

<Header />

<div className="fluid-container ">

<div className="d-flex justify-content-end mx-4 my-3">


<Link to="/addlaptopdata">

<button className='AddLaptopAndPhoneBtn'>Add Laptop</button>

     </Link>

</div>

<div className="row">

<div className="col-12">

<table >
  <tr >
    <th className='cell px-3 mx-3'>ID</th>
    <th className='cell px-3 mx-3'>Laptop Name</th>
    <th className='cell px-3 mx-3'>Brand Name</th>
    <th className='cell px-3 mx-3'>Phone Camera</th>
    <th className='cell px-3 mx-3'>Brand Weight</th>
    <th className='cell px-3 mx-3'>Brand Price</th>
  </tr>

  
{laptop && laptop.map((laptop)=>
(  
<tr >
  <th className='cell px-3 mx-3'>{laptop._id}</th>
  <th className='cell px-3 mx-3'>{laptop.brandName}</th>
  <th className='cell px-3 mx-3'>{laptop.laptopName}</th>
  <th className='cell px-3 mx-3'>{laptop.laptopCamera}mp</th>
  <th className='cell px-3 mx-3'>{laptop.laptopWeight}g</th>
  <th className='cell px-3 mx-3'>{laptop.laptopPrice}$</th>
  <th className='cell px-3 mx-3'>
  <Link to={`editlaptopdata/${laptop._id}`}> <button>Edit</button>   </Link>
  <button onClick={()=>{deleteLaptop(laptop._id)}} >Delete</button>
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

export default LaptopPage
