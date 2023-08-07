import React from 'react'
import Products from '../component/Products'


export default function Home() {
  return (
    <div className="hero mt-5">
        <div className="card text-bg-white border-0">
  <img src="/images/bg-1.jpg" class="card-img" alt="Background img" height={550}></img>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p className="card-text fs-2">CHECK OUT ALL TRENDS</p>
    </div>
    
  
  </div>
</div>
<Products/>
</div>
    
  )
}
