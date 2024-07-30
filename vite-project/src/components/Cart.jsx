import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaTrash } from "react-icons/fa";
 const Cart=({prodect ,cart,setcart,total,settotal})=> {
  const [pices , setpices] = useState(1);  
  function add(){()=>{
    setpices(pices+1);
    settotal()
  }
    
  }
  const sub =()=>{
      setpices(pices-1) 
     
  }
 const handleremove = (id)=>{
  const arr = cart.filter((item)=>{item.id !== id});setcart(arr);
  
 }

   

  return (
    <>
      <div key={prodect.id}>
                <div className='border1' >
                <div className='flex  spacearound' >
                <div className='leftcard'>
                <img className='cardimg' src={prodect.imge} alt="ddd" />
                </div>
                <div className='rightcard flex '>
                <h2 className='pad-20 widthfull'>{prodect.name}</h2>
                <p className='pad-20 '> ${prodect.ammount}</p>        
                <button className='bglight addsub white cursor' onClick={add}>+</button>
                <p className='pad-20'>{pices} pices</p>
                {/* <button className='bglight addsub white cursor' onClick={sub}>-</button> */}
                <button className=' cursor trash bglight' onClick={()=>handleremove()}><FaTrash/></button>

                
                </div>
              </div>
              {/* <button className='buynowbutton bgdark white'> BUY</button> */}
                  </div>
                    </div> 
   

    </>
    
     
    
  )
}
export default Cart