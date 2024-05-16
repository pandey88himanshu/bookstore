import React, { useState } from 'react'
import axios from 'axios'
import './AddBook.css'
import { toast } from 'react-toastify';
const AddBooks = () => {
  const [Data,setData] = useState({
    bookname: "",
    author: "",
    description: "",
    price: "",
    image: "",
  })
  const Change = (e)=>{
    const {name,value}=e.target;
    setData({...Data,[name]:value})
  }
  const submit = async (e)=>{
e.preventDefault()
{Data.bookname && Data.description && Data.author && Data.image && Data.price ? await axios.post("http://localhost:3000/api/v1/add",Data).then((res)=>toast.success(res.data.message)) : toast.error("Fill all details") }

setData({
  bookname: "",
    author: "",
    description: "",
    price: "",
    image: "",
})
  }
  // console.log(Data)
  return (
    <>
    <p className='container fs-3 fw-bold mt-3' style={{color:'green'}}>Add Book Details</p>
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
  <button type="submit" className="btn btn-success" onClick={submit}>Submit</button>
  </div>
</form>
</div>
    </>
  )
}

export default AddBooks
