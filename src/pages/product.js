import React from "react";
import { Link , useParams} from "react-router-dom";
import product from '../data'

export default function Product(){
    console.log(product[1].name)
   
    return<>
    <div>
       {product.map(ele=>{
        return <div key={ele.id}>
            <h1>name: {ele.name}</h1>
            <Link to ={`/product/${ele.id}`}>more</Link>
        </div>
          
    
       })} 
    </div>
    <h1>this is the product page</h1>
    
    </>
}