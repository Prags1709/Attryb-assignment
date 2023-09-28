const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    phoneNo: {type:Number, required:true},
    role: {
      type: String,
      enum: ['dealer', 'buyer'],
      required: true
    }
})

const UserModel = mongoose.model("user", userSchema)

module.exports = {UserModel}