import React from "react";
import Products from "./Products";
import Purchase from "./Purchase"
import {useLocation} from "react-router-dom"

export function Home(){
    return(
        <div>
            <Products/>
        </div>
    )
}

export function PurchaseDetail(){
    return(
        <div>
            <Purchase/>
        </div>
    )
}

export function Whoops404(){
    let location = useLocation()
    return(
        <div>
            <h1>Resource not found at{location}</h1>
        </div>
    )
}