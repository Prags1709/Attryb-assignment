const express = require("express")
const {UserModel} = require("../model/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userRoute = express.Router()

//Register
userRoute.post("/signup", async (req, res)=>{
    const {email, password} = req.body;
    try {
        bcrypt.hash(password, 5,async (err, securePassword)=>{
            if(err){
                console.log(err);
                res.send("Something went wrong")
            }else{
                let user = new UserModel({ email, password: securePassword})
                await user.save()
                res.status(201).send("User has been successfully registered");
            }
        })
    } catch (error) {
        console.log(error);
        res.send("User Register failed", {message: error})
    }
})

//login
userRoute.post("/login", async (req,res)=>{
    const {email,password} = req.body
    try {
        const user = await UserModel.findOne({email})
        if(!user){
            res.send("Please signup first")
        }else{
            const hash_password = user?.password;
            bcrypt.compare(password, hash_password, (err, result)=>{
            if(result){
                const token = jwt.sign({userID:user._id},"N_unlock", {expiresIn: '3h'});
                const refresh_token = jwt.sign({userID:user._id},"R_unlock", {expiresIn:180});
                res.send({msg:"Login successfully", token, refresh_token})
            }else{
                res.send("Something went wrong, login failed")
            }
        })
        }
    } catch (error) {
        res.send("Error in login the user")
        console.log(error);
    }
})

module.exports = {userRoute}

