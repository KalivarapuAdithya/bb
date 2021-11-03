const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
const userapi = require('./routes/userapi')

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/' , (req , res , next)=>{
    res.status(200).send(`<h1>Welcome to website</h1>`)
})


app.use('/api' , userapi)

app.use(async(req , res , next)=>{
    const err = new Error("Not found");
    err.status = 404;
    next(err);
})

app.use(async(err , req , res , next)=>{
    res.status(err.status || 500)
    res.send({
        error :{
            status : err.status || 500,
            message : err.message
        },
    })
})

app.listen(port , (err)=>{
    if(err)
    console.log(err)
    else
    console.log(`server running on port ${port}`)
})