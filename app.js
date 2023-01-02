const express=require('express');
const app=express();
require('./DB/connection');
const {}=require('./routes/index');

let port=process.env.PORT || 4000;
app.listen(prot,()=>{
    console.log(`server is started at ${port}`);
})