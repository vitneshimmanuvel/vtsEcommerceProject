import React, { useEffect, useState } from 'react'
import Productcard from './Productcard'
import kichenitem from './data'
import axios from "axios"
 const Prodect=({cart,setcart})=>{
    const [kichenitems]=useState(kichenitem);




  return (
    <>
    
     
     <div className='grid-4'>
      {
     kichenitems.map((item)=>(
      
        <Productcard 
        key={item.id} 
        items={item}
           cart={cart}
           setcart={setcart} />
 
     ))
  }
                
     </div>
    </>
  )
  
}
export default Prodect;