const mongoose = require ("mongoose");

const customerSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    phno:String,
    doornumber:String,
    street:String,
    city:String,
    state:String,
    pincode:String

})
const customerModel= mongoose.model("user",customerSchema);
module.exports = customerModel;