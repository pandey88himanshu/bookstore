import React from 'react'
import '../pages/AddBook.css'
import { useLocation,Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useState } from 'react'
const UpdateBook = () => {
    const navigate = useNavigate()
    const item = useLocation().state
    const [Data,setData] = useState({})
      const Change = (e)=>{
        const {name,value}=e.target;
        setData({...Data,[name]:value})
      }
      const submit = async (e)=>{
        const id = item._id
    e.preventDefault()
    console.log(Data)
    {Data.bookname || Data.description || Data.author || Data.image || Data.price ? axios.put(`https://bookstore-backend-ochre-beta.vercel.app/api/v1/updateBook/${id}`,Data).then((res)=>toast.success(res.data.message)) : toast.error("Fill any one detail") }
    //  axios.put(`http://localhost:3000/api/v1/updateBook/${id}`,Data).then((res)=>toast.success(res.data.message))

    setData({
      bookname: "",
        author: "",
        description: "",
        price: "",
        image: "",
    })
    {Data.bookname || Data.description || Data.author || Data.image || Data.price ? navigate('/books') : "" }
    
      }
      // console.log(Data)
      return (
        <>
        <p className='container fs-3 fw-bold mt-3' style={{color:'green'}}>Update Book Details</p>
        <div className='addBook'>
       <form>
        <div className='container'>
      <div className="mb-3">
        <label htmlFor="bookname" className="form-label">Enter Book Name</label>
        <input type="text" className="form-control" id="bookname" aria-describedby="emailHelp" name='bookname' onChange={Change} value={Data.bookname}/>
      </div>
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">Enter Book Description</label>
        <input type="text" className="form-control" id="Description" aria-describedby="emailHelp" name='description' onChange={Change} value={Data.description}/>
      </div>
      <div className="mb-3">
        <label htmlFor="Author" className="form-label">Enter Book Author</label>
        <input type="text" className="form-control" id="Author" aria-describedby="emailHelp" name='author' onChange={Change} value={Data.author}/>
      </div>
      <div className="mb-3">
        <label htmlFor="Image" className="form-label">Enter Image Url</label>
        <input type="text" className="form-control" id="Image" aria-describedby="emailHelp" name='image' onChange={Change} value={Data.image}/>
      </div>
      <div className="mb-3">
        <label htmlFor="Price" className="form-label">Enter Book Price</label>
        <input type="number" className="form-control" id="Price" aria-describedby="emailHelp" name='price' onChange={Change} value={Data.price}/>
      </div>
      <div className='d-flex gap-5 align-item-center'>
      <Link to='/books' className='btnHome'>Go Back</Link>
      <button type="submit" className="btnHome " onClick={submit}>Submit</button>
   
      </div>
      </div>
    </form>
    </div>
        </>
  )
}

export default UpdateBook
