const mongoose = require('mongoose')

const todoUserSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    user_email:{
        type:String,
        required:true
    },
    user_password:{
        type:String,
        required:true
    },
    user_age: {
        type:Number,
        required:true
    }

})

const TodoUserModel = mongoose.model('todoUser',todoUserSchema)

module.exports = TodoUserModel