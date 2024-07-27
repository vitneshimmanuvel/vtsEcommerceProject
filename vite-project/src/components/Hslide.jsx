import React from 'react'
import {Slide} from 'react-slideshow-image'
export default function Hslide() {

  return (
    <div>
        <Slide>
        {images.map((img , index ) => (<div key={index}  > <img  className='slideimg'src={img.url}/> <p>{img.offer}</p></div>))}
         
        </Slide>

    </div>
  )
}
