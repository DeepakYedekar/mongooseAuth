const express=require('express');
require('dotenv').config();
const app=express();
app.use(express.json());
require('./DB/connection');
const {Auth}=require('./routes/index');
app.use(Auth);
let port=process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server is started at ${port}`);
})