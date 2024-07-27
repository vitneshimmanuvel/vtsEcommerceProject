import React from 'react'
import { Link } from 'react-router-dom'
 

export default function Navbar() {
  return (
    <div >
        <ul className='navitems bg-gold  cursor'>
          <li className='navhoverdark menu cursor'>
            <div >Home 
            <ul className='menuitems bg-menu'>
           <Link to='/prodect' ><li className='menuitem '><a href="#" className='white' id='kitchen'>Kichen</a></li></Link> 
             <Link to='/prodect' ><li className='menuitem'><a href="/prodect" className='white'>Furnitures</a></li></Link>
             <Link to='/prodect' ><li className='menuitem'><a href="/prodect" className='white'>Grosories</a></li></Link>
             <Link to='/prodect' ><li className='menuitem'><a href="/prodect" className='white'>Cosmetics</a></li></Link>
              </ul>
            </div></li>
          <li className='navhoverdark menu'><div className='menu'>Gaming
          <ul className='menuitems bg-menu'>
             <Link to='/prodect' ><li className='menuitem'><a href="/prodect" className='white'>Mouse</a></li></Link>
             <Link to='/prodect' ><li className='menuitem'><a href="/prodect" className='white'>Laptop</a></li></Link>
             <Link to='/prodect' ><li className='menuitem'><a href="/prodect" className='white'>Headset</a></li></Link>
             <Link to='/prodect' ><li className='menuitem'><a href="/prodect" className='white'>Spekers</a></li></Link>
              </ul>
            </div> </li>
          
          <li className='navhoverdark menu'><div>Sports
          <ul className='menuitems bg-menu'>
             <Link to='/prodect' ><li className='menuitem'><a href="/prodect" className='white' >Shoes</a></li></Link>
             <Link to='/prodect' ><li className='menuitem'><a href="/prodect" className='white'>Football</a></li></Link>
             <Link to='/prodect' ><li className='menuitem'><a href="/prodect" className='white'>Volleyball</a></li></Link>
             <Link to='/prodect' ><li className='menuitem'><a href="/prodect  " className='white'>Thumbels</a></li></Link>
          </ul>
            </div></li>
        </ul>
    </div>
  )
}
