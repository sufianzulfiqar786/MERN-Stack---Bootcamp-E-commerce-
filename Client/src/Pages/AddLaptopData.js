import React, { useState, useRef, useEffect } from 'react'
import {useNavigate} from "react-router-dom";

import { addLaptop } from '../Service/LaptopApi';


import '../CSS/AddPhoneData.css'

const AddlaptopData = () => {


    let navigate = useNavigate()

    const [laptopUsers, setlaptopUsers] = useState({});

    const [errorData, setErrorData] = useState("0");



    const laptopnameReferenceLogin = useRef(null);
    const brandnameReferenceLogin = useRef(null);
    const laptopcameraReferenceLogin = useRef(null);
    const laptopweightReferenceLogin = useRef(null);
    const laptoppriceReferenceLogin = useRef(null);




    const AddLaptopData = async() => {

        console.log(laptopUsers)

        if (!laptopUsers.laptopName.match(/^.{6,}$/)) {
            setErrorData(1)
            laptopnameReferenceLogin.current.focus()
        }
        else if (!laptopUsers.brandName.match(/^.{6,}$/)) {
            setErrorData(2)
            brandnameReferenceLogin.current.focus()
        }
        else if (!laptopUsers.laptopCamera.match(/^.{6,}$/)) {
            setErrorData(3)
            laptopcameraReferenceLogin.current.focus()
        }
        else if (!laptopUsers.laptopWeight.match(/^\d{0,8}[.]?\d{1,4}$/)) {
            setErrorData(4)
            laptopweightReferenceLogin.current.focus()
        }
        else if (!laptopUsers.laptopPrice.match(/^\d{0,8}[.]?\d{1,4}$/)) {
            setErrorData(5)
            laptoppriceReferenceLogin.current.focus()
        }
        else {
            setErrorData('');
            console.log("hello")

            navigate("/")

            await addLaptop(laptopUsers)

        }

    };






    const onInputChanged = (event) => {
        setlaptopUsers((laptopUsers) => ({ ...laptopUsers, [event.target.name]: event.target.value }));

        // console.log(laptopUsers)
    };


    return (
        <>

            <div className="container  ">

                <div className="row d-flex align-items-center justify-content-center">





                    <div className="col-12 LaptopAndPhoneCSS">
                        <input className='my-2' type="text" name='laptopName' placeholder='laptop Name' onChange={onInputChanged} value={laptopUsers.laptopName} ref={laptopnameReferenceLogin} />
                        {errorData == 1 ? <div className="errorMessage" style={{ color: "red" }}> Please enter laptop name. </div> : ''}

                    </div>

                    <div className="col-12 LaptopAndPhoneCSS">
                        <input className='my-2' type="text" name='brandName' placeholder='Brand name' onChange={onInputChanged} value={laptopUsers.brandName} ref={brandnameReferenceLogin} />
                        {errorData == 2 ? <div className="errorMessage" style={{ color: "red" }}> Please enter brand name. </div> : ''}

                    </div>

                    <div className="col-12 LaptopAndPhoneCSS">
                        <input className='my-2' type="text" name='laptopCamera' placeholder='laptop Camera Pixels' onChange={onInputChanged} value={laptopUsers.laptopCamera} ref={laptopcameraReferenceLogin} />
                        {errorData == 3 ? <div className="errorMessage" style={{ color: "red" }}> Please enter laptop Camera Pixel. </div> : ''}

                    </div>

                    <div className="col-12 LaptopAndPhoneCSS">
                        <input className='my-2' type="text" name='laptopWeight' placeholder='laptop Weight' onChange={onInputChanged} value={laptopUsers.laptopWeight} ref={laptopweightReferenceLogin} />
                        {errorData == 4 ? <div className="errorMessage" style={{ color: "red" }}> Please enter laptop weight. </div> : ''}

                    </div>

                    <div className="col-12 LaptopAndPhoneCSS">
                        <input className='my-2' type="text" name='laptopPrice' placeholder='laptop Price' onChange={onInputChanged} value={laptopUsers.laptopPrice} ref={ laptoppriceReferenceLogin} />
                        {errorData == 5 ? <div className="errorMessage" style={{ color: "red" }}> Please enter laptop price. </div> : ''}

                    </div>


                



                    <div className="row mb-2  mb-4">

                        <div className="col-12  d-flex align-items-center justify-content-center">

                            <button className='loginSytemBtn mx-3 my-4' onClick={AddLaptopData}>Add Data</button>

                        </div>

                    </div>







                </div>

            </div>

        </>
    )
}

export default AddlaptopData
