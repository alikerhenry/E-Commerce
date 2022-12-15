import React,{useState,useEffect} from "react";

// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))


function ProductInfo(){
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null)
    //init data
    //fetch API
    useEffect(()=> {
        if (![]) return;
        setLoading(true);
      fetch(`https://dummyjson.com/products`)
      .then(res => res.json())
    //   .then(res=> setProducts(res.products))
        .then(console.log(products))
        .then(()=> setLoading(false))
        .catch(setError);
    },[products])
    // console.log(products)
    //Display data in DOM
    if(loading) return <h1>Loading...</h1>;
    if(error)
        return <pre>{JSON.stringify(error,null,2)}</pre>
    if(!products) return null;
    
    return (
        <div>
            <>
                {products.map((item)=>(
                    <div key={item.id}>
                        <img src={item.thumbnail} alt={item.title} style={{"width":"50px"}}/>
                        <p className="mb-2">{item.title}</p>
                        <img src={item.images[0]} alt={item.title} style={{"width":"100px"}}/>
                        <span>${item.price}</span>
                        <div className="container-md-4 mt-2">{item.description}</div>
                    </div>
                ))}
            </>
        </div>
    )
}

  
  export default ProductInfo;