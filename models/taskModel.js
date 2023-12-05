const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { config } = require("../config/secret")

let taskSchema = new mongoose.Schema({
    title:String,
    info:String,
    address:String,
    time:String,
    date_created: {
        type: Date,
        default: Date.now()
      },
    field:{
        type:[String],
        required:true
    },
    association:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'associations'
    }, //association
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    executor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    taken:Boolean
})

exports.UserModel = mongoose.model("users",userSchema)