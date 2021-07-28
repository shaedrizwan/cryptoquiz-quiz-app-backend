const express = require('express')
const router = express.Router()
const User = require('../models/user.model')

router.route('/')
    .get((req,res)=>{
        res.json({msg:"User route"})
    })

router.route('/signup')
    .post(async(req,res)=>{
        try{
            const user = req.body;
            const newUser = new User(user)
            addedUser = await newUser.save()
            res.json({success:true,newUser})
        }catch(err){
            res.json({success:false,error:err.message})
        }
    })

module.exports = router