const express = require('express');
const { verifyAuth } = require('../middlewares/auth.middleware');
const router = express.Router();
const Quiz = require('../models/quiz.model')

router.route('/')
    .get(async(req,res)=>{
        const quizData = await Quiz.find({})
        res.json({success:true,quizData})
    })

router.use(verifyAuth)
router.route('/add')
    .post(async(req,res)=>{
        try{
            const quiz = req.body;
            const newQuiz = new Quiz(quiz)
            addedQuiz = await newQuiz.save()
            res.json({success:true,addedQuiz})
        }catch(err){
            res.json({success:false,error:err.message})
        }
    })

module.exports = router