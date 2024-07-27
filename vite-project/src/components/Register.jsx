import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function Register() {
    const [name,setname]= useState("");
    const [email,setemail]= useState("");
    const [conformpass,setconform]= useState("");
    const [password,setpassword]= useState("");
    const[doornumber,Setdoornumber] = useState('');
    const[street,setstreet] = useState('');
    const[city,setcity] = useState('');
    const[state,setstate]=useState('');
    const[pincode,setpincode]=useState("");
    const navigate = useNavigate();

    function Submithandler(){
        event.preventDefault();
        axios.post("http://127.0.0.1:5173/register",{name,email,password})
        .then((result)=>{
           if(result.data == "accepted")
           {
            alert("registration successful")
            navigate("/");
           }
           if(result.data == "existed")
            {
             alert("User alerady existed")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    return (
        <>
    <div className='center bg-fitt'>
         <form   className='formslog' onSubmit={Submithandler}>

            <img src="../public/mail.svg"  className='svgmail'alt="cs" />
             <h2>Register</h2>
                <div className="form-group">
                    <label className='labe'>Username</label>
                    <input type="text" className='loginround marginauto' id="username" name="username" required onChange={(e)=>{
                        setname(e.target.value)
                    }}/>
                </div>
                <div className="form-group">
                    <label className='labe'>Email</label>
                    <input type="email" className='loginround  marginauto' id="email" name="email" required onChange={(e)=>{
                        setemail(e.target.value)
                    }}/>
                </div>   
                <div className="form-group">
                    <label className='labe'>Password</label>
                    <input type="password" className='loginround marginauto' id="password" name="password" required onChange={(e)=>{

                      setconform(e.target.value)  
                    }}/>
                </div>
                <div className="form-group">
                    <label className='labe'>Confirm Password</label>
                    <input type="password" className='loginround marginauto' id="confirm-password" name="confirm-password" required onChange={(e)=>{
                        setpassword(e.target.value)
                    }}/>
                </div>
                
                {/* <h3 className='textstart'>Address</h3>
                <div className="form-group ">
                    <label className='labe'>Doornumber </label>
                    <input type="text" className='loginround marginauto' id="doornumber" name="doornumber" required onChange={(e)=>{
                        Setdoornumber(e.target.value)
                    }}/>
                </div>

               
                <div className="form-group ">
                    <label className='labe'>Street   </label>
                    <input type="text" className='loginround marginauto' id="street" name="street" required onChange={(e)=>{
                        setstreet(e.target.value)
                    }}/>
                </div>
                <div className="form-group ">
                    <label className='labe'>City   </label>
                    <input type="text" className='loginround marginauto' id="city" name="city" required onChange={(e)=>{
                        setcity(e.target.value)
                    }}/>
                </div>
                <div className="form-group ">
                    <label className='labe'>State   </label>
                    <input type="text" className='loginround marginauto' id="state" name="state" required onChange={(e)=>{
                        setstate(e.target.value)
                    }}/>
                </div>
                <div className="form-group ">
                    <label className='labe'>Pincode   </label>
                    <input type="text" className='loginround marginauto' id="pincode" name="pincode" required onChange={(e)=>{
                        setpincode(e.target.value)
                    }}/>
                </div>*/}
               <a href="/home"><button className='with roundedbutton cursor'>Register</button></a> 
              <Link to="/"> <a href="#"><button className='with roundedbutton cursor'>Log in</button></a> </Link>
   
            </form>
           
    </div>
    <img className='bucketsvg' src="../public/bucket.svg" alt="" />
    <img className='creditcard' src='../public/credit.svg'/>
    <img  className='round'  src='../public/calculator.svg'/>
    <img className='roundd' src="../public/roundd.svg" alt="d" />
    </>
  )
}
