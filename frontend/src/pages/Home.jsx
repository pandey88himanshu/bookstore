import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
 <>

 <div className='container d-flex justify-content-between align-items-center home'>
    <div className='d-flex justify-content-center align-item-center flex-column gap-3'>
        <div> 
            <p className='fs-1 fw-bolder headingHome'>Welcome to Book Store</p>
            <p className='paraHome fw-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat quo dicta incidunt deleniti animi itaque veniam et a perspiciatis, nemo excepturi saepe hic necessitatibus non ea officia velit modi?</p>
            
            </div>
        <div ><Link to='/books' className='btnHome'>View Books</Link></div>
  
    </div>
    <div className='img'>
        <img src="1.jpg" alt="" />
    </div>
 </div>
 </>
  )
}

export default Home
