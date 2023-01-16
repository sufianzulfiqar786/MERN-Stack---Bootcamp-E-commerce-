import React, { useState, useRef, useEffect } from 'react'
import { Row, Col, Button, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Routes, Route, useNavigate, useHistory } from 'react-router-dom';

import '../CSS/LoginSystem.css'
import '../CSS/RadioMaleFemale.css'
import '../CSS/Checkbox.css'
// import FontAwesome from 'react-fontawesome'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
// import RegistrationPage from '../Pages/RegistrationPage';

import {getRegister} from '../Service/PhoneApi'





const LoginPage = (props, args) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    let navigate = useNavigate()

    let navigate1 = useNavigate()

    const [info1, setInfo1] = useState({});
    const [info2, setInfo2] = useState(0);

    const [errorData, setErrorData] = useState("0");

    const [passwordType, setPasswordType] = useState("password");

    const [loginError, setLoginError] = useState("");
    
    const [Rregister, setRregister] = useState("");


    const usernameReferenceLogin = useRef(null);
    const emailReferenceLogin = useRef(null);
    const passwordReferenceLogin = useRef(null);


    const userinfo = localStorage.getItem("user")
    
    useEffect(() => {
        if (userinfo) {
            navigate1("/home")
        }
    }, [userinfo])

    useEffect(() => {
  
        getAllPhone();
      
      }, [])

      const getAllPhone = async () =>{
        let res = await getRegister()
        console.log("resssssss: ", res.phone);
        setRregister(res.phone);

        
      }




    const Login = () => {

        console.log("info1", info1)
        console.log("Rregister", Rregister[0].email)


        for(let i =0 ; i<Rregister.length; i++){
            if(info1.loginemail ==  Rregister[i].email){
                console.log("Not Enter correct data")
                // console.log("email reg", Rregister[i].email)
                // console.log("email login", info1.loginemail)
                setInfo2(1)
            }
        }


        if (!info1.loginusername) {
            setErrorData(1)
            usernameReferenceLogin.current.focus()
        }
        else if (!info1.loginemail) {
            setErrorData(2)
            emailReferenceLogin.current.focus()
        }
        else if (!info1.loginemail.match(/[@]/)) {
            setErrorData(4)
            emailReferenceLogin.current.focus()
        }
        else if (!info1.loginpassword) {
            setErrorData(3)
            passwordReferenceLogin.current.focus()
        }
        // else if(info1.loginemail != Rregister[0].email){
            else if(!info2==1){
console.log("Not Equal both")
console.log("Rregister[0].email", Rregister[0].email)
console.log("info1.email", info1.loginemail)

        }
        else {
            setErrorData('');
            console.log("hello")


            // const data = { "email": info1.loginemail, "password": info1.loginpassword };
            // const responsr = axios
            //     .post('https://admin.dhikrfikr.com/public/api/user_login', data)
            //     .then((response) => {
            //         console.log(response.data.user);
            //         // event.target.reset();
            //         if (response.data.token) {
            //             localStorage.setItem("user",JSON.stringify( response.data.user))
            //             navigate("/Home")
            //             // navigate("/Home")  after login move to where
            //         }
            //         else {
            //             // alert(response.data.message + " Hello")
            //             setLoginError(response.data.message)
            //         }
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     })


                navigate("/webuser")


        }

    };

    const Register = () => {




        console.log("hello")

        navigate("/register")

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


    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")



    }


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

                                <h1 className='Register text-center'>Login Here</h1>

                            </div>



                            <div className="col-lg-12 registerInput">
                                <input className='my-2' type="text" name='loginusername' placeholder='Username' onChange={onInputChanged} value={info1.loginusername} ref={usernameReferenceLogin} />
                                {errorData == 1 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Username. </div> : ''}

                            </div>

                            <div className="col-lg-12 registerInput">
                                <input className='my-2' type="loginemail" name='loginemail' placeholder='Email' onChange={onInputChanged} value={info1.loginemail} ref={emailReferenceLogin} />
                                {errorData == 2 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Email. </div> : ''}
                                {errorData == 4 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Valid Email. </div> : ''}

                            </div>

                            <div className=" loginPasswordPositionParent col-lg-12 mb-4 registerInput">

                                <div className='loginPasswordPositionUpper'>
                                    <input className='my-2' type={passwordType} name='loginpassword' placeholder='Password' onChange={onInputChanged} value={info1.loginpassword} ref={passwordReferenceLogin} />


                                    <div className=" loginPasswordPositionBottom input-group-btn " >
                                        <h1 className="eyeBtn btn " onMouseUp={togglePassword} onMouseDown={togglePassword} onTouchStart={togglePassword} ontouchend={togglePassword} >
                                            <p style={{ width: "10px", height: "5px", color: "Black", border: "none" }}>{passwordType === "password" ? <i class="fa fa-eye-slash" aria-hidden="true"></i> : <i class="fa fa-eye" aria-hidden="true"></i>}</p>
                                        </h1>
                                    </div>
                                </div>
                                {errorData == 3 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Password. </div> : ''}
                                <p style={{ color: "red" }} >{loginError}</p>

                            </div>









                        </div>


                        <div className="row mb-lg-2 mb-md-2 mb-4">

                            <div className="col-lg-12  d-flex align-items-center justify-content-center">

                                <button className='loginSytemBtn mx-3' onClick={Register}>Register</button>
                                <button className='loginSytemBtn mx-3' onClick={Login}>Login</button>

                            </div>

                        </div>


                    </div>

                </div>

                <Modal isOpen={modal} toggle={toggle} {...args}>

                    <ModalHeader toggle={toggle}>Terms & Conditions:</ModalHeader>

                    <ModalBody>

                        {/* <b>First Name:</b> <p>{props.user.firstname || ""}</p><br/>
<b>Last Name:</b> <p>{props.user.lastname || ""}</p><br/>
<b>loginemail:</b> <p>{props.user.loginemail || ""}</p><br/>
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

export default LoginPage
