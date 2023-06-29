const mongoose = require('mongoose')

const EmpoyeeSchema = new mongoose.Schema({
    email:String,
    value1:Number,
    value2:Number,
    value3:Number,
    value4:Number,
    value5:Number,
    value6:Number,
    value7:Number,
    value8:Number,
    value9:Number,
    value10:Number,
    // valorCmt:String,
})

const LoginSchema = new mongoose.Schema({
    email:String,
    password:String
    // valorCmt:String,
})



mongoose.model("form",EmpoyeeSchema)
mongoose.model("login",LoginSchema)
