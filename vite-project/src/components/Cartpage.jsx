import React from 'react'
import Cart from './Cart'
import Carthead from './Carthead'
import Fotter from './Fotter'
import Cartinit from './Cartinit'
import { useEffect } from 'react'
import { useState } from 'react'
 const Cartpage=({cart,setcart}) => {

  
 
  const [total,settotal] = useState(0);
  useEffect(()=>{settotal(cart.reduce((prevtol, prodect)=> prevtol+parseInt(prodect.ammount),0) );},[cart]);

  // let sum=()=>{ for(let i=0;i<cart.length;i++){
      
  //   sum+=cart.item.am
  // }}
   
    //  settotal(sum) 
  return (
    <div  >
        <Carthead/>
        {cart.length >= 1? cart.map((prodect)=>{
          return (
            <Cart prodect={prodect} />
          )
          }):<Cartinit/>}
        {cart.length >= 1?  <div className='flex total spacearound'><h2>Total Amount:$
        
        
        {total}</h2>  <button className='buybutton cursor'>Buy</button></div> :false}
        
        <Fotter/>   
    </div>
  )
}
export default Cartpage