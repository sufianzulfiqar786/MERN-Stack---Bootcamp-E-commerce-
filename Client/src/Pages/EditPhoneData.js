import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { EditPhone, getEditPhone } from "../Service/PhoneApi";
import { Link } from "react-router-dom";

import "../CSS/AddPhoneData.css";

const EditPhoneData = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const defaultValue = {
    phoneName: "",
    brandName: "",
    phoneCamera: "",
    phoneWeight: "",
    phonePrice: "",
  };

  const [phoneUsers, setphoneUsers] = useState(defaultValue);

  const [errorData, setErrorData] = useState("0");

  const [getEditPhoneDetail, setgetEditPhoneDetail] = useState(defaultValue);

  useEffect(() => {
    loadPhoneDetail();
  }, []);

  const loadPhoneDetail = async () => {
    const resp = await getEditPhone(id);
    // console.log(resp.data , "eyre")
    setphoneUsers(resp.data);
  };

  const phonenameReferenceLogin = useRef(null);
  const brandnameReferenceLogin = useRef(null);
  const phonecameraReferenceLogin = useRef(null);
  const phoneweightReferenceLogin = useRef(null);
  const phonepriceReferenceLogin = useRef(null);

  const EditPhoneData = async () => {
    console.log(phoneUsers);

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
    } else {
      setErrorData("");
      console.log("hello");
      navigate("/");

      await EditPhone(phoneUsers, id);
    }
  };

  const onInputChanged = (event) => {
    console.log(event.target);

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
              value={phoneUsers?.phoneName}
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
            {/* {console.log(getEditPhoneDetail[0]?.phoneName)} */}
          </div>

          <div className="col-12 LaptopAndPhoneCSS">
            <input
              className="my-2"
              type="text"
              name="brandName"
              placeholder="Brand name"
              onChange={onInputChanged}
              value={phoneUsers?.brandName}
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
              value={phoneUsers?.phoneCamera}
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
              value={phoneUsers?.phoneWeight}
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
              value={phoneUsers?.phonePrice}
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

          <div className="row mb-2  mb-4">
            <div className="col-12  d-flex align-items-center justify-content-center ">
              <button
                className="loginSytemBtn mx-3 my-4"
                onClick={EditPhoneData}
              >
                {" "}
                Edit Data{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPhoneData;
