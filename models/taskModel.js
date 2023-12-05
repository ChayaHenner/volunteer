const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { config } = require("../config/secret")

let taskSchema = new mongoose.Schema({
    title:String,
    info:String,
    address:String,
    date_created: {
        type: Date,
        default: Date.now()
      },
     role:{
        type:String,
        default:"user"
     },
    age:Number,
    description:String,  
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
     },
    username:{type:String, unique:true},
    img_url:String,
    interests:{
        type:[String],
        required:true
    },
    rating:Number,
    address:String
})

exports.UserModel = mongoose.model("users",userSchema)