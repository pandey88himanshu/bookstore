import React from 'react'
import { useLocation,useNavigate,Link } from 'react-router-dom';
import './CardDetails.css'
const CardDetails = () => {
const item = useLocation().state
const navigate = useNavigate()

  return (
 <>
 <div className='container cardDetails'> 
<div className='cardImage'><img src={item.image} alt="" /></div>
<div className='CardDetailsItem'>
    <div className='BookName'>{item.bookname}</div>
    <div className='CardDesc'>{item.description}</div>
    <div className='cardAuthor'>
    <div className='Cardauthor'>{item.author}</div>
    <div className='CardPrice'>${item.price}</div>
    </div>
    <div className='CardButton '>
        <Link to='/books' className='btnHome'>Go Back</Link>
        <button onClick={()=>navigate('/updateBook',{state:item})} className='btnHome'>Update</button>
        </div>
</div>
 </div>
 </>
  )
}

export default CardDetails
