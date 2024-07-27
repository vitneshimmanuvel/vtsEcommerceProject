import Logo from './Logo'
import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    const [email,setemail]= useState("");
    const [password ,setpassword]=useState("");
    const navigate = useNavigate()
    function Loginhandler(){
        event.preventDefault()
        axios.post('http://127.0.0.1:5173',{email,password})
        .then((result)=>{
            if(result.data == "logedin")
            {
                alert('login successful')
                navigate('/home')
            }
            if(result.data == 'missmatch')
            {
                alert('invaled password')
            }
            if(result.data == 'notexisted'){
                alert('invaled Email')
            }
        }).catch((err)=>{console.log(err)})
    }



    const[image1 ,setimage1]= useState(false);
                        function action(){
                            setimage1(true)
                        }

                        function unaction(){
                            setimage1(false)
                        }
   
    const [image2,setimage2]=useState(false);
                       function action2(){setimage2(true)};
                       function  unaction2(){setimage2(false)};
    const [image3,setimage3]=useState(false);
                       function action3(){setimage3(true)};
                       function  unaction3(){setimage3(false)};
    const [image4,setimage4]=useState(false);
                       function action4(){setimage4(true)};
                       function  unaction4(){setimage4(false)};
     const [image5,setimage5]=useState(false);
                       function action5(){setimage5(true)};
                       function  unaction5(){setimage5(false)};

      
  return (
    <div className='center' >
                    <img className={image3? "loginimage3 three" : "loginimage3"}  src="./public/psw.webp" alt="x" />
                    <img className={image4? "loginimage4 four" : "loginimage4"}  src="./public/xbox.jpeg" alt="x" />

           <form className="formslog" id="form" onSubmit={Loginhandler} onMouseOver={()=>{action(); action2();action3();action4();action5()}} onMouseLeave={()=>{unaction();unaction2();unaction3();unaction4()}} >
                <h2 className='loginh2'>Login</h2>
                <div className="input-group">
                    <label className='loginlab marginleft'>  Email</label>
                    <input type="text" id="username" name="username" className='loginround' required  onChange={(e)=>{
                        setemail(e.target.value)
                    }} />
                </div>
                <div className="input-group">
                    <label  className='loginlab' >Password</label>
                    <a><input type="password" id="password" name="password" className='loginround' required  onChange={(e)=>{
                        setpassword(e.target.value)
                    }}/></a>
                </div>
               <button type="submit" className="roundedbutton" >Login</button>
                <Link to='/register'><p className="alter">Not registered? <a href="#">Create an account</a></p></Link>
            </form>
            <img className={image1? "loginimage1 one" : "loginimage1"}  src="./public/phone.webp" alt="x" />
            <img className={image2? "loginimage2 two" : "loginimage2"} src="./public/bag.webp" alt="x" />
            <p className={image5? "loginimage5 five" : "loginimage5"} >Grass your Product here ...</p>
           

           
    </div>
  )
}
