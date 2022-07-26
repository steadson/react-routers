import React from "react";
import { Link } from "react-router-dom";

export default function Error(){
    return<>
    <h2>404</h2>
    <h3>page not found.</h3>
    <Link to="/">to Home</Link>
    </>
}