import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import OemCar from "../page/oemCar";
import AddCar from "../page/addCar";
import SecHandCar from "../page/secHandCar";
import Siginup from "../page/signup";
import Login from "../page/login";


const Mainroute = ()=>{
    return (
        <Routes>
            <Route path="/" element={<OemCar />} />
            <Route path="/addCar" element={<AddCar />} />
            <Route path="/sechandcar" element={<SecHandCar />} />
            <Route path="/signup" element={<Siginup />} />
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}

export default Mainroute;