import React from "react";
import Product  from "../data";
import { Link, useParams } from "react-router-dom";

export default function Single(){
   
    const {productId}=useParams();
    const produt=Product.find((ele)=>{ return ele.id==productId})
const {name, content}=produt
    return<>
    <h1>{productId}</h1>
    <h2>{name}</h2>
    <h2>{content}</h2>
    <Link to={'/product'}>Back to product</Link>
    
    </>
}