const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000
const dotenv = require('dotenv').config();
const routers = require('./routers/router');
const res = require('express/lib/response');
const app = express()

app.set("view engine","ejs")
app.use('/articles',routers)

app.get('/',(req,res)=>{
     const routers = [{
        title : "Article",
        createdAt : Date.now()
        ,
        description : "Test Description"
     }]
     
    res.render('server',{routers: routers})
})

app.listen(port,()=>{
    console.log("Listening")
})



