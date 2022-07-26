import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
export default function About(){

    return<>
    <h1>this is the About page</h1>
   <Link to='/product'>see product</Link>
    </>
}