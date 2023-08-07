import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom"
import Skeleton from 'react-loading-skeleton';
export default function Product() {
    const {id}=useParams();
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        const getProduct=async()=>{
            setLoading(true);
            const response =await fetch(`https://dummyjson.com/product/${id}`);
            let data=await response.json()
            setProduct(data);
            setLoading(false);
        }
        getProduct();
    },[]);

const Loading =()=>{
    return(
        <>
       <div className="col-md-6">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-6">
            <Skeleton height={50} width={300}/>
        </div> 
        </>
    );
}

const ShowProduct = ()=>{

    return(
        <>
        <div className="col-md-6">
            <img src={product.thumbnail} alt={product.title} height="350px" width="350" ></img>
        </div>
        <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">
                {product.category}
            </h4>
            <h1 className='display-5'>{product.title}</h1>
            <p className='lead'> Rating {product.rating }</p>
            <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
            <p className='lead'>{product.description}</p>

            <button className='btn btn-outline-dark px-4 py-2'>Add to Cart</button>
            <Link to="/cart" className='btn btn-outline-dark ms-3 px-3  py-2'>Go to Cart</Link>
        </div>
        </>
    )
}

  return (
    <div>
        <div className="container py-5">
            <div className="row py-5">
                {loading ?<Loading/>:<ShowProduct/>}
            </div>
        </div>
    </div>
  )
}
