import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { addPhone } from "../Service/PhoneApi";

import "../CSS/AddPhoneData.css";
import axios from "axios";

const AddPhoneData = () => {
  let navigate = useNavigate();

  const defaultValue = {
    phoneName: "",
    brandName: "",
    phoneCamera: "",
    phoneWeight: "",
    phonePrice: "",
  };

  const [phoneUsers, setphoneUsers] = useState(defaultValue);

  const [errorData, setErrorData] = useState("0");

  const [imagePhone, setimagePhone] = useState("");

  const phonenameReferenceLogin = useRef(null);
  const brandnameReferenceLogin = useRef(null);
  const phonecameraReferenceLogin = useRef(null);
  const phoneweightReferenceLogin = useRef(null);
  const phonepriceReferenceLogin = useRef(null);

  const AddPhoneData = async () => {
    //    console.log("before api", phoneUsers)

    if (!phoneUsers.phoneName.match(/^.{6,}$/)) {
      setErrorData(1);
      phonenameReferenceLogin.current.focus();
    } else if (!phoneUsers.brandName.match(/^.{6,}$/)) {
      setErrorData(2);
      brandnameReferenceLogin.current.focus();
    } else if (!phoneUsers.phoneCamera.match(/^.{6,}$/)) {
      setErrorData(3);
      phonecameraReferenceLogin.current.focus();
    } else if (!phoneUsers.phoneWeight.match(/^\d{0,8}[.]?\d{1,4}$/)) {
      setErrorData(4);
      phoneweightReferenceLogin.current.focus();
    } else if (!phoneUsers.phonePrice.match(/^\d{0,8}[.]?\d{1,4}$/)) {
      setErrorData(5);
      phonepriceReferenceLogin.current.focus();
    }
    // else if (imagePhone.phoneImage) {
    //     setErrorData(6)
    //     // phonepriceReferenceLogin.current.focus()
    // }
    else {
      setErrorData("");
      console.log("hello");

      navigate("/");

      // e.preventDefault();

      var formData = new FormData();
      formData.append("photo", imagePhone);
      formData.append("phoneName", phoneUsers.phoneName);
      formData.append("brandName", phoneUsers.brandName);
      formData.append("phoneCamera", phoneUsers.phoneCamera);
      formData.append("phoneWeight", phoneUsers.phoneWeight);
      formData.append("phonePrice", phoneUsers.phonePrice);
      console.log("Phone user", phoneUsers.phoneName);
      console.log("before api", formData);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      // const res = await axios.post("http://localhost:8000/front/addphonedata",formData,config);

      try {
        console.log("Phone Data", formData, config);
        return await axios.post(
          `http://localhost:8000/front/addphonedata`,
          formData
        );
      } catch (error) {
        console.log("Error in Add Phone Api", error);
      }

      // const url = 'http://localhost:8000/api/image'

      //         const ImagePhoneData = new FormData()
      //         ImagePhoneData.append('imagePhone', phoneUsers)

      //         axios.post(url, ImagePhoneData).then((res)=>{
      //         console.log("Image upload success fully from front end");
      //         }).catch((error)=>{
      //         console.log("error from front end img" , error)
      //         })

      // await addPhone(phoneUsers)
    }

    // console.log("sufian hello")
  };

  const setimgfile = (e) => {
    setimagePhone(e.target.files[0]);
  };

  const onInputChanged = (event) => {
    setphoneUsers((phoneUsers) => ({
      ...phoneUsers,
      [event.target.name]: event.target.value,
    }));

    console.log(phoneUsers);
  };

  return (
    <>
      <div className="container  ">
        <div className="row d-flex justify-content-center">
          <div className="col-12 LaptopAndPhoneCSS">
            <input
              className="my-2"
              type="text"
              name="phoneName"
              placeholder="Phone Name"
              onChange={onInputChanged}
              value={phoneUsers.phoneName}
              ref={phonenameReferenceLogin}
            />
            {errorData == 1 ? (
              <div className="errorMessage" style={{ color: "red" }}>
                {" "}
                Please enter phone name.{" "}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="col-12 LaptopAndPhoneCSS">
            <input
              className="my-2"
              type="text"
              name="brandName"
              placeholder="Brand name"
              onChange={onInputChanged}
              value={phoneUsers.brandName}
              ref={brandnameReferenceLogin}
            />
            {errorData == 2 ? (
              <div className="errorMessage" style={{ color: "red" }}>
                {" "}
                Please enter brand name.{" "}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="col-12 LaptopAndPhoneCSS">
            <input
              className="my-2"
              type="text"
              name="phoneCamera"
              placeholder="Phone Camera Pixels"
              onChange={onInputChanged}
              value={phoneUsers.phoneCamera}
              ref={phonecameraReferenceLogin}
            />
            {errorData == 3 ? (
              <div className="errorMessage" style={{ color: "red" }}>
                {" "}
                Please enter phone Camera Pixel.{" "}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="col-12 LaptopAndPhoneCSS">
            <input
              className="my-2"
              type="text"
              name="phoneWeight"
              placeholder="Phone Weight"
              onChange={onInputChanged}
              value={phoneUsers.phoneWeight}
              ref={phoneweightReferenceLogin}
            />
            {errorData == 4 ? (
              <div className="errorMessage" style={{ color: "red" }}>
                {" "}
                Please enter phone weight.{" "}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="col-12 LaptopAndPhoneCSS">
            <input
              className="my-2"
              type="text"
              name="phonePrice"
              placeholder="Phone Price"
              onChange={onInputChanged}
              value={phoneUsers.phonePrice}
              ref={phonepriceReferenceLogin}
            />
            {errorData == 5 ? (
              <div className="errorMessage" style={{ color: "red" }}>
                {" "}
                Please enter phone price.{" "}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="col-12 LaptopAndPhoneCSS">
            <div className="row">
              <div className="col-6">
                <input
                  className="my-2"
                  type="file"
                  name="photo"
                  onChange={setimgfile}
                />
                {errorData == 6 ? (
                  <div className="errorMessage" style={{ color: "red" }}>
                    {" "}
                    Please add image price.{" "}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="col-6">preview</div>
            </div>
          </div>

          <div className="row mb-2  mb-4">
            <div className="col-12  d-flex align-items-center justify-content-center ">
              <button
                className="loginSytemBtn mx-3 my-4"
                onClick={AddPhoneData}
              >
                {" "}
                Add Data{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPhoneData;
