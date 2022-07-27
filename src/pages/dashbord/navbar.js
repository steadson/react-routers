import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){
    //const[isActive, setisActive]=useState(false);
    return<>
     <NavLink to="/dashboard/stats" style={({isActive})=>{
        return {color: isActive?"red":"grey"}
     }} >Stat</NavLink>
    <NavLink to="/dashboard/profile" style={({isActive})=>{
        return {color: isActive?"red":"grey"}
     }}> profile </NavLink>
    </>
}