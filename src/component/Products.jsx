import React,{ useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import{Link} from 'react-router-dom';
export default function Products() {
    const[data,setData]=useState([]);
    const[filter,setFilter]=useState(data);
    const[loading,setLoading]=useState(false);
let componentMounted=true;

useEffect(()=>{
    const getProducts=async()=>{
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        if(componentMounted){
            let data=await response.json()
            setData(data.products);
            setFilter(data.products);
            setLoading(false);
          console.log(filter);

        }
        return()=>{
            componentMounted=false;
        }
    }
getProducts();
}, []);

const Loading=()=>{
    return(
        <>


         <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
         <div className="col-md-3">
            <Skeleton height={350}/>
        </div>  
        </>
    );
};
const filterProduct=(cat)=>{
    const updatedList=data.filter((x)=>x.category === cat);
    setFilter(updatedList);
}

const sortfunction=(sortdata, x,y)=>{
    if(sortdata){
        const Sortphotps=[...filter].sort((a,b)=>{
            return a[sortdata] > b[sortdata]? x: y;
        })
        setFilter(Sortphotps)
    }
}

const ShowProducts = ()=>{
    return(
        <>
        <div className="bittons d-flex flex-wrap justify-content-center  pb-5">
        <button className="btn btn-outline-dark me-2 mt-1" onClick={()=>setFilter(data)}>All</button>
        <button className="btn btn-outline-dark me-2 mt-1" onClick={()=>filterProduct("smartphones")}>Smart Phone</button>
        <button className="btn btn-outline-dark me-2 mt-1"onClick={()=>filterProduct("laptops")}>Laptops</button>
        <button className="btn btn-outline-dark me-2 mt-1"onClick={()=>filterProduct("fragrances")} >Fragrances </button>
        <button className="btn btn-outline-dark me-2 mt-1"onClick={()=>filterProduct("skincare")}> Skincare</button>
        <button className="btn btn-outline-dark me-2 mt-1"onClick={()=>filterProduct("groceries")}> Groceries</button>
        <button className="btn btn-outline-dark me-2 mt-1"onClick={()=>filterProduct("home-decoration")}> Home-decoration</button>
    </div>
     

    <div className="bittons d-flex flex-wrap justify-content-center mb-5 pb-5">
        <h3>Sort Item: </h3>&nbsp;
    <button className="btn btn-outline-dark me-2 mt-1" onClick={()=>sortfunction("price","-1","1")}>(High) Price</button>
    <button className="btn btn-outline-dark me-2 mt-1" onClick={()=>sortfunction("price","1","-1")}>(Low) Price</button>
    <button className="btn btn-outline-dark me-2 mt-1" onClick={()=>sortfunction("title","1","-1")}>Name(A-Z)</button>
    <button className="btn btn-outline-dark me-2 mt-1" onClick={()=>sortfunction("title","-1","1")}>Name(Z-A)</button>

    </div>
    {filter.map((product)=>{
        return(
            
            <div className="col-md-3 mb-4" >
            <div className="card h-100 text-center p-4" key={product.id}>
                <img src={product.images[0]} className="card-img-top" alt={product.title} height="250px"></img>
                <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                    <p className="card-text lead fw-bold">$ {product.price}</p>
                    <p className="card-text lead fw-bold">Rating {product.rating}</p>
                    <Link to={`/product/${product.id}`} className="btn btn-primary">
                        Buy Now</Link>
                </div>
                </div>
            </div>
    
        )
    })}
    </>
    );
   
}
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'> Latest Products</h1>
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ?<Loading/>:<ShowProducts/>}
            </div>
        </div>

    </div>
  )
}
