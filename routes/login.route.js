const express = require('express')
const router = express.Router()

router.route('/')
    .get((req,res)=>{
        res.json({msg:"Login route"})
    })

module.exports = router