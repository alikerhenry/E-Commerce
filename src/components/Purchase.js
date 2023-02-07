import React from "react";
import StarRating from "./StarRating";
import { FaPlus } from "react-icons/fa";
import { useQuery } from "react-query";
import { Whoops404 } from "../pages/Error";

const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products`)
      return res.json()
  }

const Purchase = () => {
    const {products, status} = useQuery('products', fetchProducts);

    return (
        <div>
            { status === 'success' && (
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
                                            Details
                                        </span>
                                        <StarRating totalStars={5}/>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

            )}

            { status === 'loading' && (
                    <div>Loading...</div>
                )}

            { status === 'error' && (
                <Whoops404/>
            )}
        </div>

    )
}

export default Purchase;
