const Database = require('../Database/database');

async function adminDisplayCourses(req , res , next) {
    let JWTdata = req.data;
    let coursesMade = [];
    let adminData = await Database.Admin.find({
        username: JWTdata.username
    }).populate('MadeCourses');
    let mydata = JSON.stringify(adminData[0].MadeCourses)
    req.mydata = mydata;
    next();

   
}

module.exports = adminDisplayCourses