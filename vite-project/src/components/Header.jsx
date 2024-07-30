import React, { useEffect, useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from "axios"
export default function Header(size) {

  const [name , setName] = useState("")
  let email = localStorage.getItem("email")

  useEffect(() => {
    axios.post("http://127.0.0.1:3000/getName",{email})
    .then((result) => {
      setName(result.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }) 
  return (
    <div className='headers flexwrap cursor'>
       <div className='i2-flex'>
       <div className='goatlog x'><img  className="logohead"src="./public/logo1-01.svg" alt="" /></div>
       <h1>GO.AT</h1>
       </div>
        <input type="search" placeholder='Search' className='searchs' />
        <div className='i2-flex flexleft' >
            <a href="#" className='tdn white'><h2>{name}</h2></a>
            
            <Link to="/cart" className='tdn white cartlogo'><FaCartArrowDown/></Link>
            <span className='count'>{size.size}</span>
        </div>
      
    </div>
  )
}
