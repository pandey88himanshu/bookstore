import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
  
   <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom" >
  <div className="container">
    <Link className="navbar-brand fw-semibold" to='/'>Book Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium">
        <Link className="nav-item nav-link " to ='/'>
          Home
        </Link>
        <Link className="nav-item nav-link " to ='/books'>
         Books
        </Link>
        <Link className="nav-item nav-link " to ='/addBooks'>
          Add Books
        </Link>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar
