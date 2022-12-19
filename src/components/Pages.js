import React from "react";
import Products from "./Products";
import StarRating from "./StarRating";
import {useLocation} from "react-router-dom"

export function Home(){
    return(
        <div>
            <Products/>
            <StarRating totalStars={5}/>
        </div>
    )
}

export function About(){
    return(
        <div>
            <h1>[Add details to products]</h1>
        </div>
    )
}

export function Whoops404(){
    let location = useLocation()
    console.log(location);
    return(
        <div>
            <h1>Resource not found at{location}</h1>
        </div>
    )
}