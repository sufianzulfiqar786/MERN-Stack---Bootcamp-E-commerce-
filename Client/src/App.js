import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboad from './Pages/Dashboad'
import Header from '../src/Components/Header'
import AddPhoneData from './Pages/AddPhoneData';
import AddLaptopData from './Pages/AddLaptopData';
import EditPhoneData from './Pages/EditPhoneData';
import EditLaptopData from './Pages/EditLaptopData';
import DashboardLogin from './Pages/DashboardLogin';
import Extra from './Pages/Extra';
import ResgisterPage from './Pages/ResgisterPage';
import LoginPage from './Pages/LoginPage';
import WebUser from './Pages/WebUser';

const App = () => {
  return (
    <>
    
  


    <BrowserRouter>
        {/* <Extra/> */}
        <Routes>
          <Route path="/" element={<Dashboad />} />
          <Route path="/register" element={<ResgisterPage/>} />
          <Route path="/loginpage" element={<LoginPage/>} />
          <Route path="/webuser" element={<WebUser/>} />
          <Route path="/Admin" element={<DashboardLogin />} />
          <Route path="/addphonedata" element={<AddPhoneData />} />
          <Route path="/editphonedata/:id" element={<EditPhoneData />} />
          <Route path="/addlaptopdata" element={<AddLaptopData />} />
          <Route path="/editlaptopdata/:id" element={<EditLaptopData />} />
    
        </Routes>
        
      </BrowserRouter>
    
    </>
  )
}

export default App