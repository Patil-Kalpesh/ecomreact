import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
  <div>
    <nav className="navbar navbar-expand-lg bg-light py-3 fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">My-Shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
        
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li> 
            
          </ul>
          <div className="buttons">
            <Link to="/login" className='btn btn-outline-dark'>Login</Link>
            <Link to="/register" className='btn btn-outline-dark ms-2'>Register</Link>
            <Link to="cart" className='btn btn-outline-dark ms-2'>Cart (0)</Link>
          </div>
        </div>
      </div>
    </nav>

  </div>
  )
}


