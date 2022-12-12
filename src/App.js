import React,{useState,useEffect} from "react";
import './App.css';
import StarRating from "./components/StarRating";
//https://api.github.com/users/alikerhenry

function GitHubUser(){
  const [data,setData] = useState([])
  //init data
  //fetch API
  useEffect(()=> {
    fetch(`https://dummyjson.com/products/10`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  },[])
  //Display data in DOM
  if(data){
    return (
    <>
      <h1>{data.title}</h1>
      <img src="https://i.dummyjson.com/data/products/10/2.jpg" alt="user"/>
      <p>{data.description}</p>
    </>
    )
      
  }
  return null
}

function App(){
  return(
    <>
      <GitHubUser />
      <StarRating totalStars={5}/>
    </>
  )
}

export default App;
