import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Sharedlayout(){
    return<>
    <nav>
    <Link to="/" >Home</Link>
    <Link to='/about'>  About-us</Link>
    <Link to='/product'>  Product</Link>
    <Link to='/dashboard'>  Dashboard</Link>
    </nav>
    <Outlet/>
    <footer>footer</footer>
    </>
}