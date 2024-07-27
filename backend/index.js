const express = require('express');
const mangoose = require('mongoose');;
const app = express();
const cors = require('cors');
const  mongoose  = require('mongoose');
const  customermodel =require("./customer")

mongoose.connect("mongodb://localhost:27017/customer");
app.use(express.json());
app.use(cors({origin: true, credentails : true}))



app.get("/profile",(req,res)=>{
    localStorage.setItem(email)
})
app.post("/register",(req,res)=>{
    const {name ,email,password} =req.body;
    customermodel.findOne({email:email})
    .then((result)=>{
        if(result){
        if(result.email == email){
            res.json('existed')
        }
        }
        else{
            customermodel.create({
                name:name,
                email:email,
                password:password
            })
            .then((result)=>{res.json('accepted')})
        }
    })

})


app.post('/',(req,res) =>{
    const{email,password} = req.body;
    customermodel.findOne({email:email})
    .then((result)=>{
        if(result){
            if(result.password == password){
                res.json('logedin')
            }
            else{
                res.json("missmatch")
            }
        }
        else{
            res.json('notexisted')
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})
app.listen(5173,()=>{console.log("working on 5713 ")})
