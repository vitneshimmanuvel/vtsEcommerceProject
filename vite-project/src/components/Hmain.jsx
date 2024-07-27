import React from 'react'
import {Slide} from 'react-slideshow-image'
import Hslide from './Hslide'
import { TbTruckDelivery } from "react-icons/tb";
export default function Hmain() {

    const images = [
        {
            url:'./public/keybord.webp',
            offer:"30%"
        },
        {
            url:'./public/xbox.jpeg',
            offer:'50%'
        },
        {
            url:"./public/psw.webp",
            offer:"20%"
        },
        {
            url:"./public/phone.webp",
            offer:"10%"
        }
        
    ]
  return (
    <div className='mainn bgimg' >
        <section  className='firsthalf opacity'>
               <h1 className='vhh'>Get the Offers respect to the ratings</h1>
            <p>As a welcome bones get upto 50% off on your first 1000/Rs</p>
     
        </section>
        <section className='secon'><div className='mainscale'><img src="../public/6011-removebg-preview.png" alt="" /></div> </section>

     
    </div>
  )
}
