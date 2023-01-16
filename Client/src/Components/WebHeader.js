import React, { useEffect, useState } from 'react'
import axios from 'axios'

import '../CSS/WebHeader.css'

import {getPhone} from '../Service/PhoneApi'


const WebHeader = () => {

    const [posts, setPosts] = useState([])

    




    useEffect(() => {
  
        getAllPhone();
        
      
      }, [])

      const getAllPhone = async () =>{
        let res = await getPhone()
        console.log("resssssss: ", res.phone);
        setPosts(res.phone);

        
      }



    return (
        <>


            <div className="fluid-container">

            



             <div className="container">


             <div className="row">


             {
          posts.map((el) => {
            return (


<div className="col-4 my-4">


    <div className=" PhoneData">

        <div className="row">


            <div className="col-12">
                <img style={{width:"100%", height:"450px"}} src={`http://localhost:8000/images/${el.phoneImage}`} alt="" />
            </div>
            <div className="col-12 mx-3 my-1"> <span style={{fontWeight:"bold"}}> Phone Name:</span> {el.brandName}</div>
            <div className="col-12 mx-3 my-1"> <span style={{fontWeight:"bold"}}> Brand Name:</span> {el.phoneName}</div>
            <div className="col-12 mx-3 my-1"> <span style={{fontWeight:"bold"}}> Phone Weight:</span> {el.phoneCamera}</div>
            <div className="col-12 mx-3 my-1"> <span style={{fontWeight:"bold"}}> Phone Price</span>: {el.phonePrice}</div>

        </div>


    </div>

</div>

);
          })}


</div>



             </div>


            </div>



        </>
    )
}

export default WebHeader
