const express = require('express');
const AdminRout = express.Router();
const adminMiddleware = require('../Middleware/admin');
const adminAlreadyExist = require('../Middleware/adminAlreadyExist')
const createAdminAccount = require('../Middleware/createAdminAccount');
const adminDisplayCourses = require('../Middleware/adminDisplayCourse')
const JWT = require('../Middleware/jwt');
const createCourse = require('../Middleware/adminCreateCourse');

AdminRout.post('/signin' , adminMiddleware, JWT.createJWT, (req , res)=>{
    let key = req.token;
    res.setHeader('Authorization' , key );
    res.json({
        LoginStatus : "Success"
    })

})
AdminRout.post('/signup', adminAlreadyExist, createAdminAccount,  (req , res)=>{

   
    res.json({
        status : "Success"
    })

})

AdminRout.post('/courses' ,JWT.verifyJWT, createCourse, (req  , res)=>{
    res.json({
        status : "Course Added"
    })

})

AdminRout.get('/courses' , JWT.verifyJWT , adminDisplayCourses ,(req , res)=>{
   let courseData = req.mydata
   res.send(courseData);

})


module.exports = AdminRout;