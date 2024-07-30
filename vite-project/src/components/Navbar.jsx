import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
export default function Navbar() {
 const [catogory,setcatogory] = useState('') 
const Navigate = useNavigate()
 useEffect(()=>{
     axios.get('/products',{catogory})
     console.log(catogory)
   
 })

 useEffect(() => {
  localStorage.setItem("category",catogory)
 })


  
  return (
    <div >
        <ul className='navitems bg-gold  cursor'>
          <li className='navhoverdark menu cursor'>
            <div id='catogory'>Home 
            <ul className='menuitems bg-menu'>
            <Link to='/products' onClick={()=> localStorage.setItem("catogory","Kitchen")}><li className='menuitem '><p href="#" className='white' id='kitchen'>Kitchen</p></li></Link> 
             <Link to='/products' onClick={()=> localStorage.setItem("catogory","Furnitures")}><li className='menuitem'><a href="/prodect" className='white'>Furnitures</a></li></Link>
             <Link to='/products'onClick={()=> localStorage.setItem("catogory","groceries")}><li className='menuitem'><a href="/prodect" className='white'>Grosories</a></li></Link>
             <Link to='/products'onClick={()=> localStorage.setItem("catogory","cosmetics")}><li className='menuitem'><a href="/prodect" className='white'>Cosmetics</a></li></Link>
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


// import axios from 'axios'
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar() {

  

//   return (
//     <div>
//       <ul className='navitems bg-gold cursor'>
//         <li className='navhoverdark menu cursor'>
//           <div>Home
//             <ul className='menuitems bg-menu'>
//               <Link to='/products'><li className='menuitem'><a href="#" className='white'>Kitchen</a></li></Link>
//               <Link to='/products?category=Furnitures'><li className='menuitem'><a href="#" className='white'>Furnitures</a></li></Link>
//               <Link to='/products?category=Groceries'><li className='menuitem'><a href="#" className='white'>Groceries</a></li></Link>
//               <Link to='/products?category=cosmetics'><li className='menuitem'><a href="#" className='white'>Cosmetics</a></li></Link>
//             </ul>
//           </div>
//         </li>
//         <li className='navhoverdark menu'><div className='menu'>Gaming
//           <ul className='menuitems bg-menu'>
//             <Link to='/products?category=Mouse'><li className='menuitem'><a href="#" className='white'>Mouse</a></li></Link>
//             <Link to='/products?category=Laptop'><li className='menuitem'><a href="#" className='white'>Laptop</a></li></Link>
//             <Link to='/products?category=Headset'><li className='menuitem'><a href="#" className='white'>Headset</a></li></Link>
//             <Link to='/products?category=Speakers'><li className='menuitem'><a href="#" className='white'>Speakers</a></li></Link>
//           </ul>
//         </div></li>
//         <li className='navhoverdark menu'><div>Sports
//           <ul className='menuitems bg-menu'>
//             <Link to='/products?category=Shoes'><li className='menuitem'><a href="#" className='white'>Shoes</a></li></Link>
//             <Link to='/products?category=Football'><li className='menuitem'><a href="#" className='white'>Football</a></li></Link>
//             <Link to='/products?category=Volleyball'><li className='menuitem'><a href="#" className='white'>Volleyball</a></li></Link>
//             <Link to='/products?category=Dumbbells'><li className='menuitem'><a href="#" className='white'>Dumbbells</a></li></Link>
//           </ul>
//         </div></li>
//       </ul>
//     </div>
//   );
// }
