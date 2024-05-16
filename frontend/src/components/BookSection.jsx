import React from 'react'
import './BookSection.css'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const BookSection = ({data}) => {
// console.log(data)
const navigate = useNavigate()
    const removeBook = async(id)=>{
await axios.delete(`http://localhost:3000/api/v1/deleteBook/${id}`).then((res)=>toast.success(res.data.message))
    }
  return (
   <div className='cardContainer'>
    {data && data.map((item,index)=>{
  return(
    <div key={index} className='card ' >
      <div className=' bookcard' onClick={()=>{navigate("/bookDetails",{state:item})}}>
     <div> <img src={item.image} alt="" /></div>
     <div className='bookname'>{item.bookname.slice(0,20)}...</div>
      <div className='author'><span className='authorname'>{item.author}</span>
      <span className='price'>${item.price}</span></div>

      </div>
      <div className='cardbtn'>
        <button onClick={()=>removeBook(item._id)}>Delete</button>
      </div>
    </div>
  )
        
    })}
   </div>
  )
}

export default BookSection
