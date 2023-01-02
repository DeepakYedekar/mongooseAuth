const express=require('express');
require('dotenv').config();
const app=express();
app.use(express.json());
require('./DB/connection');
const {Name}=require('./routes/index');
app.use(Name);
let port=process.env.PORT || 4000;

app.listen(prot,()=>{
    console.log(`server is started at ${port}`);
})