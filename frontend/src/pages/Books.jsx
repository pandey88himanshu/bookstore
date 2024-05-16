import React from 'react'
import axios from'axios'
import { useState , useEffect } from 'react'
import BookSection from '../components/BookSection'
import './Books.css'
 const Books = ()=>{
  const [Data, setData] = useState("")
  useEffect(()=>{
    const fetch = async ()=>{
      await axios.get("http://localhost:3000/api/v1/getBook").then((res)=>setData(res.data.books))
    }
    fetch();
  })
  return (
    <>
    <div className='book container'>
    <p className='container fs-3 fw-bold mt-3' style={{color:'green'}}>Books</p>
    {Data ? <BookSection data={Data}/> : <div>Loading..</div>}
    </div>
    </>
  )
}

export default Books
