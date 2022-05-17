const express = require('express');
const app = express();
const dotenv = require('dotenv').config(); 

app.get('/',(req,res)=>{
    res.send("working");
})
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("listen")
});

