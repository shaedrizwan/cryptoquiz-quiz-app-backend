const express = require('express')
const app = express()
const cors = require('cors')
const {initializeDB} = require('./database/db.connect')
const loginRoute = require('./routes/login.route')

initializeDB()
app.use(cors())

app.use('/login',loginRoute)


app.get('/', (req, res) => {
  res.send('Hello World!')
})




// 404 Route (Should always be at the end)
app.use((req,res)=>{
  res.status(404).json({success:false,errorMessage:"404 Not Found"})
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})