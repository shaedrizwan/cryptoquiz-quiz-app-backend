const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Quiz = require('./quiz.model')



const userSchema = new Schema({
    firstname:{
        type:String,
        required:["First name required"]
    },
    lastname:{
        type:String,
        required:["Last name required"]
    },
    email:{
        type:String,
        require:["Email ID required"],
        unique:["Email ID already exists"]
    },
    password:{
        type:String,
        required:["Password required"]
    },
    myHighScores:[{
        quiz:{type:Schema.Types.ObjectId,ref:Quiz},
        score:Number
    }]
})

module.exports = mongoose.model('User',userSchema)