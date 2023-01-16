import React, { useState, useRef } from 'react'
import { Row, Col, Button, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Routes, Route, useNavigate, useHistory } from 'react-router-dom';

import '../CSS/LoginSystem.css'
import '../CSS/RadioMaleFemale.css'
import '../CSS/Checkbox.css'
// import FontAwesome from 'react-fontawesome'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
// import RegistrationPage from '../Pages/RegistrationPage';





const ResgisterPage = (props, args) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    let navigate = useNavigate()

    const [info1, setInfo1] = useState({});

    const [errorData, setErrorData] = useState("0");

    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");


    var reg = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/';



    const fullnameReference = useRef(null);
    const usernameReference = useRef(null);
    const emailReference = useRef(null);
    const numberReference = useRef(null);
    const passwordReference = useRef(null);
    const confirmpasswordReference = useRef(null);
    const fav_languageReference = useRef(null);
    const pleaseCheckboxReference = useRef(null);

    const Login = () => {

        console.log("hello")

        navigate("/loginpage")



    };

    const onInputChanged = (event) => {
        const targetName = event.target.name;

        if (targetName == "pleaseCheckbox") {
            const targetValue = event.target.checked;
            setInfo1((info1) => ({
                ...info1,
                [targetName]: targetValue
            }));
        } else {
            const targetValue = event.target.value;
            setInfo1((info1) => ({
                ...info1,
                [targetName]: targetValue
            }));
        }


        console.log(info1)
    };


    const Resgister = () => {

        console.log("info1",info1)


        if (!info1.fullname) {
            setErrorData(1)
            fullnameReference.current.focus()
        }
        else if (!info1.username) {
            setErrorData(2)
            usernameReference.current.focus()
        }
        else if (!info1.email) {
            setErrorData(3)
            emailReference.current.focus()
        }
        else if (!info1.email.match(/[@]/)) {
            setErrorData(15)
            emailReference.current.focus()
        }

        else if (!info1.number) {
            setErrorData(18)
            numberReference.current.focus()
        }

        // else if (!info1.password) {
        //     setErrorData(4)
        //     passwordReference.current.focus()
        // }

        // else if (!info1.password.match(/[A-Z]/)) {
        //     setErrorData(9)
        //     passwordReference.current.focus()
        // }

        // else if (!info1.password.match(/[a-z]/)) {
        //     setErrorData(10)
        //     passwordReference.current.focus()
        // }

        // else if (!info1.password.match(/[0-9]/)) {
        //     setErrorData(11)
        //     passwordReference.current.focus()
        // }

        // else if (info1.password.length < 8) {
        //     setErrorData(16)
        //     passwordReference.current.focus()
        // }



        // else if (!info1.confirmpassword) {
        //     setErrorData(5)
        //     confirmpasswordReference.current.focus()
        // }


        // else if (info1.password !== info1.confirmpassword) {
        //     console.log("Confirm")
        //     setErrorData(8)
        //     passwordReference.current.focus()
        // }
        else if (!info1.fav_language) {
            setErrorData(6)
            fav_languageReference.current.focus()
        }
        else if (!info1.pleaseCheckbox) {
            setErrorData(7)
            pleaseCheckboxReference.current.focus()
        }
        else {
            setErrorData('');
            console.log("hello")
            console.log("sufian register", info1);
            const data={
            fullname : info1.fullname,
            username : info1.username,
            email : info1.email,
            number : info1.number,
            }
            console.log("data",data)
    //  const data = {"role_id": 2, "first_name": info1.fullname, "last_name": info1.username, "email": info1.email, "phone_number": info1.number, "gender": info1.fav_language };
            const responsr = axios
                .post('http://localhost:8000/front/register', data)
                .then((response) => {
                    console.log(response);
                    // event.target.reset();
                })
                .catch((error) => {
                    console.log("Error in resgister api from front end",error);
                })


            navigate("/loginpage")
        }



      

       





    };



    // const togglePassword = () => {
    //     if (passwordType === "password") {
    //         setPasswordType("text")
    //         return;
    //     }
    //     setPasswordType("password")
    // }


    // const toggleConfirmPassword = () => {
    //     if (confirmPasswordType === "password") {
    //         setConfirmPasswordType("text")
    //         return;
    //     }
    //     setConfirmPasswordType("password")
    // }


    return (
        <>

            <div className="container loginSystemBody">




                <div className="row row1stloginSystemBody ">


                    <div className="col-lg-5 col-md-5  col1strow1stloginSystemBody text-light">

                        <img className='mt-lg-1 mt-md-4 mt-4 mb-1' src="https://www.freeiconspng.com/uploads/multimedia-photo-icon-31.png" alt="" />
                        <h1>Login Sytem</h1>
                        <p className='text-justify px-lg-4 px-md-2 px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus harum eveniet fugit esse alias rem neque placeat quas eum! Fuga eligendi facere tempora animi, amet modi corporis corrupti commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ig elit. Porro incidunt unde aspernatur? Aperiam saepe obcaecati illum dolore.</p>
                        <i className=" iconFontRow fa fa-info-circle   text-light " aria-hidden="true"></i>
                    </div>

                    <div className="col-lg-7 col-md-7  col2ndrow1stloginSystemBody ">

                        <div className="row">

                            <div className="col-lg-12 registerInput mt-lg-0 mt-md-0 mt-3">

                                <h1 className='Register text-center'>Register Here</h1>

                            </div>

                            <div className="col-lg-12 registerInput">

                                <input className='my-2' type="text" name='fullname' onChange={onInputChanged} value={info1.fullname} placeholder='First Name' ref={fullnameReference} />
                                {errorData == 1 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Full name. </div> : ''}


                            </div>

                            <div className="col-lg-12 registerInput">

                                <input className='my-2' type="text" name='username' onChange={onInputChanged} value={info1.username} placeholder='Last Name' ref={usernameReference} />

                                {errorData == 2 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Username. </div> : ''}

                            </div>

                            <div className="col-lg-12 registerInput">

                                <input className='my-2' type="email" name='email' onChange={onInputChanged} value={info1.email} placeholder='Email' ref={emailReference} />
                                {errorData == 3 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Email. </div> : ''}
                                {errorData == 15 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Valid Email. </div> : ''}

                            </div>

{/* NUmber  */}
                            <div className="col-lg-12 registerInput">

                                <input className='my-2' type="number" name='number' onChange={onInputChanged} value={info1.number} placeholder='Phone' ref={numberReference} />
                                {errorData == 18 ? <div className="errorMessage" style={{ color: "red" }}> Please Phone Number. </div> : ''}
                                
                            </div>

                            {/* <div className="col-lg-6 registerInput"> */}

                                {/* <input className='my-2' type="password" name='password' onChange={onInputChanged} value={info1.password} placeholder='Password' ref={passwordReference} /> */}


                                {/* <div className='RegisterPasswordPositionUpper'>
                                    <input className='my-2' type={passwordType} name='password' placeholder='Password' onChange={onInputChanged} value={info1.password} ref={passwordReference} />


                                    <div className=" RegisterPasswordPositionBottom input-group-btn " >
                                        <h1 className="eyeBtn btn " onMouseUp={togglePassword} onMouseDown={togglePassword} >
                                            <p style={{ width: "10px", height: "5px", color: "Black", border: "none" }}>{passwordType === "password" ? <i class="fa fa-eye-slash" aria-hidden="true"></i> : <i class="fa fa-eye" aria-hidden="true"></i>}</p>
                                        </h1>
                                    </div>
                                </div> */}

                                {/* {errorData == 4 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Password with Captial, Lower, and Numbers. </div> : ''} */}
                                {/* {errorData == 9 ? <div className="errorMessage" style={{ color: "red" }}> Please enter "A-Z" Capital Alphabet in Password. </div> : ''} */}
                                {/* {errorData == 10 ? <div className="errorMessage" style={{ color: "red" }}> Please enter "a-z" Lower Alphabet in Password. </div> : ''} */}
                                {/* {errorData == 11 ? <div className="errorMessage" style={{ color: "red" }}> Please enter "0-9" Number in Password. </div> : ''} */}
                                {/* {errorData == 16 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Password Length Greater than "8". </div> : ''} */}

                            {/* </div> */}

                            {/* <div className="col-lg-6 registerInput"> */}

                                {/* <input className='my-2' type="password" name='confirmpassword' onChange={onInputChanged} value={info1.confirmpassword} placeholder='Repeat Password' ref={confirmpasswordReference} /> */}



                                {/* <div className='RegisterPasswordPositionUpper'>
                                    <input className='my-2' type={confirmPasswordType} name='confirmpassword' placeholder='Confirm Password' onChange={onInputChanged} value={info1.confirmpassword} ref={confirmpasswordReference} />


                                    <div className=" RegisterPasswordPositionBottom input-group-btn " >
                                        <h1 className="eyeBtn btn " onMouseUp={toggleConfirmPassword} onMouseDown={toggleConfirmPassword} >
                                            <p style={{ width: "10px", height: "5px", color: "Black", border: "none" }}>{confirmPasswordType === "password" ? <i class="fa fa-eye-slash" aria-hidden="true"></i> : <i class="fa fa-eye" aria-hidden="true"></i>}</p>
                                        </h1>
                                    </div>
                                </div> */}




                                {/* {errorData == 5 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Confirm Password. </div> : ''} */}
                                {/* {errorData == 12 ? <div className="errorMessage" style={{ color: "red" }}> Please enter "A-Z" Capital Alphabet in Password. </div> : ''} */}
                                {/* {errorData == 13 ? <div className="errorMessage" style={{ color: "red" }}> Please enter "a-z" Lower Alphabet in Password. </div> : ''} */}
                                {/* {errorData == 14 ? <div className="errorMessage" style={{ color: "red" }}> Please enter "0-9" Number in Password. </div> : ''} */}
                                {/* {errorData == 17 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Password Length Greater than "8". </div> : ''} */}

                                {/* {errorData == 8 ? <div className="errorMessage" style={{ color: "red" }}> Password and Confirm Password Does not Match. </div> : ''} */}

                            {/* </div> */}


                            <div className="col-lg-6 pl-2 pr-0">

                                <div className="row Step1Row3Common2Ratio">



                                    <p className="ratioButton mt-md-4 ml-4 mt-4">
                                        <input type="radio" id="featured-1" name="fav_language" value="Male" onChange={onInputChanged} />
                                        <label className="ratioButtonLabel" for="featured-1"><p className="ml-3 mt-1">Male</p></label>

                                        <input type="radio" id="featured-2" name="fav_language" value="Female" onChange={onInputChanged} />
                                        <label className="ratioButtonLabel" for="featured-2"><p className="ml-3 mt-1">Female</p></label>
                                        {errorData == 6 ? <div className="errorMessage " style={{ color: "red" }}> Please Select Gender. </div> : ''}

                                    </p>


                                </div>
                                {/* {errorData == 6 ? <div className="errorMessage">Please enter Gender.</div> : ''} */}

                            </div>


                            <div className="col-lg-6 ">

                                <div className="row mt-lg-4 mb-lg-2 mb-md-5 mb-4">

                                    <div className="col-2">

                                        <input className='CheckboxInput mx-0 ' type="checkbox" id="featured-6" name="pleaseCheckbox" onChange={onInputChanged} value={info1.pleaseCheckbox} />
                                        <label className='Checkboxlabel mb-3 mr-0' for="featured-6" > </label>

                                    </div>

                                    <div className="col-10 pl-0 pr-0">
                                        <div className="row">
                                            <span className='PleaseAcceptCheckbox ml-3 ' >Accept <span className='termsAndConditionsCheckbox' onClick={toggle}> terms and conditions </span> ? </span>

                                        </div>
                                    </div>
                                    {errorData == 7 ? <div className="errorMessage ml-3 my-lg-3 mt-md-3 mt-3" style={{ color: "red" }}> Please accept Terms & Conditions. </div> : ''}

                                </div>


                            </div>


                        </div>


                        <div className="row mb-lg-2 mb-md-2 mb-4">

                            <div className="col-lg-12 d-flex align-items-center justify-content-center">

                                <button className='loginSytemBtn mx-3' onClick={Resgister} >Register</button>
                                <button className='loginSytemBtn mx-3' onClick={Login}>Login</button>

                            </div>

                        </div>


                    </div>

                </div>

                <Modal isOpen={modal} toggle={toggle} {...args}>

                    <ModalHeader toggle={toggle}>Terms & Conditions:</ModalHeader>

                    <ModalBody>

                        <b>Full Name:</b> <p>{info1.fullname || ""}</p><br />
                        <b>Username:</b> <p>{info1.username || ""}</p><br />
                        <b>Email:</b> <p>{info1.email || ""}</p><br />
                        <b>Number:</b> <p>{info1.number || ""}</p><br />
                        <b>Password:</b> <p>{info1.password || ""}</p><br />
                        <b>Confirm Password:</b> <p>{info1.confirmpassword || ""}</p><br />
                        <b>Gender:</b> <p>{info1.fav_language || ""}</p><br />
                        <b>Terms & Condition:</b> <p>{info1.pleaseCheckbox == true ? "Yes" : "No" || ""}</p><br />

                        {/* <b>First Name:</b> <p>{props.user.firstname || ""}</p><br/>
<b>Last Name:</b> <p>{props.user.lastname || ""}</p><br/>
<b>Email:</b> <p>{props.user.email || ""}</p><br/>
<b>Telephone:</b> <p>{props.user.phone || ""}</p><br/>
<b>Age:</b> <p>{props.user.age || ""}</p><br/>
<b>Gender:</b> <p>{props.user.fav_language || ""}</p><br/>
<b>Address:</b> <p>{props.user.address || ""}</p><br/>
<b>City:</b> <p>{props.user.city || ""}</p><br/>
<b>Postcode:</b> <p>{props.user.postcode || ""}</p><br/>
<b>Country:</b> <p>{props.user.countryData || ""}</p><br/>

<b>Message:</b> <p>{props.user.message || ""}</p><br/>
<b>Accept terms & conditions:</b> <p>{props.user.pleaseCheckbox == true ? "Yes" : "No" }</p><br/> */}

                        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur rerum, neque, fuga architecto provident iste aut dicta ratione in sunt optio itaque. Maxime expedita cum veritatis similique optio assumenda pariatur, dolorem ut fugiat sequi at labore vitae tenetur incidunt iste necessitatibus eum distinctio? Tempore excepturi doloremque nesciunt cupiditate tempora est eaque vero ipsa quod culpa assumenda veritatis ullam facere temporibus, dolore beatae sint fugiat illum molestias, voluptate ipsam repudiandae quae impedit. Esse odio quaerat, amet minima odit unde nam, fugit magnam incidunt omnis iure libero aspernatur ut molestiae vitae. At eaque, laudantium sed similique amet tenetur dolore minus. Odio exercitationem voluptates debitis praesentium libero consequatur eaque, rem vitae itaque natus, officia ad laboriosam? Saepe enim quaerat, harum consectetur accusantium aliquam.</p>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>
                            Privacy & Policy
                        </Button>{' '}
                        <Button color="secondary" onClick={toggle}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>


            </div>

        </>
    )
}

export default ResgisterPage
