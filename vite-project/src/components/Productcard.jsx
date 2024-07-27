import React from 'react'
import { useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import {Rating} from 'react-simple-star-rating';
 const Productcard = ( {items,cart,setcart} ) => {

  

  const Handleclick = (id) => {
    if(liked == false){
      setliked(true);
    }
    else{
      setliked(false)
    }
  }


  const [liked , setliked]=useState(false); 
  const addcart = ()=>{  
    setcart([...cart,items]);
    console.log(cart);
  
  };
  const removecart = ()=>{setcart(cart.filter((c)=>c.id !== items.id))};

  
  return (
      <>
            <div className='card' > 
             <img className='cardimg' src={items.imge} alt="dvsd" />
             <div className='heartt margintop cursor' onClick={()=>Handleclick(items.id)}> 
               {liked ?
                      <svg class="heart fav purple cursor" width="" height="" viewBox="0 0 70 70" fill="none" >
                      <path d="M39 18C39 27.9411 30.7173 36 20.5 36C10.2827 36 2 27.9411 2 18C2 8.05887 10.2827 -5.93827e-06 20.5 -5.93827e-06C30.7173 -5.93827e-06 39 8.05887 39 18Z" fill=""/>
                      <path d="M69 18C69 27.9411 60.7173 36 50.5 36C40.2827 36 32 27.9411 32 18C32 8.05887 40.2827 0 50.5 0C60.7173 0 69 8.05887 69 18Z" fill=""/>
                      <path d="M34.8177 69.1665L19.5 48.5L11.5 38L9.92345 35.7478C8.64289 33.9184 7.49865 31.9973 6.5 30V30L5.5 28.5L5 27.5L5.5 27.5L64.9729 27.8626L65.8872 27.4919L63.8872 30.9919L61.8872 33.4919L57.8872 38.9919L50.3872 49.4919L34.8177 69.1665Z" fill=""/>
                      </svg>                           
                      :                      
                      <svg class="heart fav" width="" height="" viewBox="0 0 70 70" fill="none" >
                      <path d="M39 18C39 27.9411 30.7173 36 20.5 36C10.2827 36 2 27.9411 2 18C2 8.05887 10.2827 -5.93827e-06 20.5 -5.93827e-06C30.7173 -5.93827e-06 39 8.05887 39 18Z" fill=""/>
                      <path d="M69 18C69 27.9411 60.7173 36 50.5 36C40.2827 36 32 27.9411 32 18C32 8.05887 40.2827 0 50.5 0C60.7173 0 69 8.05887 69 18Z" fill=""/>
                      <path d="M34.8177 69.1665L19.5 48.5L11.5 38L9.92345 35.7478C8.64289 33.9184 7.49865 31.9973 6.5 30V30L5.5 28.5L5 27.5L5.5 27.5L64.9729 27.8626L65.8872 27.4919L63.8872 30.9919L61.8872 33.4919L57.8872 38.9919L50.3872 49.4919L34.8177 69.1665Z" fill=""/>
                      </svg>}  
           </div> 
     <p className='border1px'>{items.name}</p>
     <p>$ {items.ammount}</p>
     {/* <p>{items.ratings}</p>  */}
     <Rating  
        initialValue={items.ratings}/>
        
     
      {cart.includes(items)?<button className='roundedbutton  black onclickbutton cursor' onClick={removecart}><FaTrash/></button>
      : 
      <button className='roundedbutton white bg-gold cursor' onClick={addcart}><FaCartArrowDown/></button>}


     

   
   </div>

  
      
      </>
  )
}


export default Productcard