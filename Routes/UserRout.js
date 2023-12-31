const express = require('express');
const UserRout = express.Router();
const userMiddleware = require('../Middleware/user');
const userCreateAccount = require('../Middleware/userCreateAccount');
const userJWT = require('../Middleware/userJWT');
const displayAllCourses = require('../Middleware/displayAllCourses');
const userBuyCourses = require('../Middleware/userBuyCourses');

UserRout.post('/signup', userCreateAccount, (req, res) => {
    res.json({
        status: "Account Has Been Created"
    })
})

UserRout.post('/signin', userMiddleware, userJWT.userJWT, (req, res) => {
    let JWT = req.JWTuser;
    res.setHeader('Authorization', JWT)
    res.json({
        login: "Success"
    })

})

UserRout.get('/courses', displayAllCourses, (req, res) => {
    let allCourses = req.courseData;
    res.send(allCourses)


})

UserRout.post('/buycourse', userJWT.decodeUserJWT, userBuyCourses, (req, res) => {
    res.json({
        status: "Course Purchase Successfull"
    })

})

module.exports = UserRout;
