import React,{useState,useEffect} from "react";
import StarRating from "./StarRating";
import { FaPlus } from "react-icons/fa";

function Purchase(){
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

    return (
        <div className="container-md ">
            <h1 className="display-1">WELCOME!</h1>
            <div className="row justify-content-evenly gy-2">
                    {products.map((item)=>(
                        <div className="card col-8 shadow" 
                            style={{"width":"14rem","height":"auto"}} 
                            key={item.id}
                        >
                            <img src={item.thumbnail}
                            alt={item.images[0]}
                            className="card-image-top rounded "
                             />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <span className="card-text">${item.price}</span>
                                <div className="card-text">{item.description}</div>
                                <span className="btn btn-success d-block mt-2">
                                    <FaPlus className="mx-2"/>
                                    Add to cart
                                </span>
                                <StarRating totalStars={5}/>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
       
    )
}

export default Purchase;