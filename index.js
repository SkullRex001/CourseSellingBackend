const express = require('express');
const AdminRout = require('./Routes/AdminRout')
const UserRout = require('./Routes/UserRout')
const app = express();
app.listen(3000 , (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("port is running")
    }
})
app.use('/admin',  AdminRout);
app.use('/user' , UserRout);
