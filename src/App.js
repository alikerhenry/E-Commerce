import React from "react";
import './App.css';
import ProductInfo from "./components/ProductInfo"
import StarRating from "./components/StarRating";
//https://api.github.com/users/alikerhenry

function App(){
  return(
    <>
    <header>
      <div className="container-md-4 bg-primary">
        <h1 className="p-2 text-white">LEMONGREEN</h1>
      </div>
    </header>
    <main className="container-lg ">
      <div className="container-xxl">
        <ProductInfo />
        <StarRating totalStars={5}/>
      </div>
    </main>
    <footer></footer>
    </>
  )
}

export default App;
