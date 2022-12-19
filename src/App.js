import React from "react";
import './App.css';
import { Home,About,Whoops404} from "./components/Pages";
import {Routes,Route} from "react-router-dom"
//https://api.github.com/users/alikerhenry

function App(){
  return(
    <>
    <header>
      <div className="container-md-4 bg-primary">
        <h1 className="p-2 text-white">LEMONGREEN</h1>
      </div>
    </header>
    <main className="container-xl ">
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Whoops404/>}/>
      </Routes>
    </main>
    <footer></footer>
    </>
  )
}

export default App;
