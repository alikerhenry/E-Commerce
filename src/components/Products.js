import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"

function Products(){
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null)
    
    useEffect(()=> {
        setLoading(true);
      fetch(`https://dummyjson.com/products`)
        .then(res => res.json())
        .then(res=> setProducts(res.products))
        .then(()=> setLoading(false))
        .catch(setError);
    },[])
    console.log(products)
    if(loading) return <h1>Loading...</h1>;
    if(error)
        return <pre>{JSON.stringify(error,null,2)}</pre>

    function Thumbnail(){
        return(
            <div className="container-md ">
            <div className="row justify-content-evenly gy-3">
                    {products.map((item)=>(
                        <div className="card col-8 shadow" 
                            style={{"width":"10rem","height":"auto"}} 
                            key={item.id}
                        >
                            <img src={item.thumbnail}
                            alt={item.title}
                            className="card-image-top rounded w-auto"
                             />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <span className="card-text">${item.price}</span>
                                <Link to="/about">
                                <span className="btn btn-success">Purchase</span>
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
        )
    }
    //2nd Route
    // function PurchaseProduct(){

    // }

    return (
        <div>
            <Thumbnail/>
        </div>
    )
}

  
  export default Products;