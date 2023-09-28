import React,{useState} from "react";
import {Routes, Route, NavLink} from 'react-router-dom'

let obj = [
    {path:"/",title:"OEM Car"},
    {path:"/addCar",title:"Add Car"},
    {path:"/sechandcar",title:"Second Hand Car"},
    {path:"/signup",title:"signup"},
    {path:"/login",title:"login"}
]

const styfun=({isActive})=>{
    return isActive?
    {textDecoration:'none',color:"orange"}
    :{textDecoration:'none',color:"lightblue"}
}

const Navbar = ()=>{
    return (
        <div className="nav">    
            {obj.map((ele, i)=>{
                return (
                    <NavLink style={styfun} to={ele.path} key={i+ele.path}>{ele.title}</NavLink>
                )
            })}
        </div>
    )
}

export default Navbar;