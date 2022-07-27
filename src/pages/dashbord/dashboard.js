import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./navbar";
export default function Dashboard(){

    return<>
   <Navbar/>
    <h1>this is the dashboard page</h1>

    <Outlet/>
    <Link to='/'>home</Link>
    </>
}