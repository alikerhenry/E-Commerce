import React from "react";
import './App.css';
import { Home,PurchaseDetail,Whoops404} from "./components/Pages";
import {Routes,Route} from "react-router-dom"

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
        <Route path="/purchase" element={<PurchaseDetail/>}/>
        <Route path="*" element={<Whoops404/>}/>
      </Routes>
    </main>
    <footer></footer>
    </>
  )
}

export default App;
