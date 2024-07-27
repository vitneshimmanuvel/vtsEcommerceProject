import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Header(size) {
  return (
    <div className='headers flexwrap cursor'>
       <div className='i2-flex'>
       <div className='goatlog x'><img  className="logohead"src="./public/logo1-01.svg" alt="" /></div>
       <h1>GO.AT</h1>
       </div>
        <input type="search" placeholder='Search' className='searchs' />
        <div className='i2-flex flexleft' >
            <a href="#" className='tdn white'><h2>name</h2></a>
            
            <Link to="/cart" className='tdn white cartlogo'><FaCartArrowDown/></Link>
            <span className='count'>{size.size}</span>
        </div>
      
    </div>
  )
}
