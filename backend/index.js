const express = require('express');
const mangoose = require('mongoose');;
const app = express();
const cors = require('cors');
const  mongoose  = require('mongoose');
const  customermodel =require("./customer")
const productModel = require("./Product")


mongoose.connect("mongodb://localhost:27017/customer");
app.use(express.json());
app.use(cors({origin: true, credentails : true}))

app.get("/profile",(req,res)=>{
    localStorage.setItem(email)
})
app.post("/register",(req,res)=>{
    const {username,email,password,doornumber,phno,
        street,city,state,pincode} =req.body;
    customermodel.findOne({email:email})
    .then((result)=>{
        if(result){
        if(result.email == email){
            res.json('existed')
        }
        }
        else{
            customermodel.create({
                username:username,
                email:email,
                password:password,
                phno:phno,
                doornumber:doornumber,
                street:street,
                city:city,
                state:state,
                pincode:pincode
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

app.post("/getName",(req,res) => {
    const {email} = req.body

    customermodel.findOne({email : email})
    .then((result) => {
        res.json(result.username)
    })
    .catch((err) => {
        console.log(err)
    })
})


app.post('/prodect',(req,res)=>{
    const {catogory} = req.body
   console.log("Welcome"); 
})


app.post('/category',(req, res) => {
    const {catogory} = req.body
    productModel.find(catogory)
    .then((result) => {
        console.log(result)
        res.json(result)
    })
    .catch((err) => {
        console.log(err)
    })
});



// app.get('/products/:category', async function (req, res) {
//     const category = req.params.category;

//     if (!category) {
//         return res.status(400).send('Invalid category');
//     }

//     const client = new MongoClient(url);
//     try {
//         await client.connect();
//         console.log('Connected successfully to MongoDB server');
//         const db = client.db(dbName);
//         const collection = db.collection('product');

//         const products = await collection.find({ catogory: category }).toArray();

//         if (products.length === 0) {
//             return res.status(404).send('No products found in this category');
//         }
//         res.json(products);
//     } catch (err) {
//         console.error('Failed to connect to the database. Error:', err);
//         res.status(500).send('Internal server error');
//     } finally {
//         await client.close();
//         console.log('Database connection closed.');
//     }
// });
  
app.listen(3000,()=>{console.log("working on 3000 ")})
