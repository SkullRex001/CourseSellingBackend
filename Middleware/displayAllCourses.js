const Database = require('../Database/database')

async function displayAllCourses(req, res, next) {
    try {
        let courseData = await Database.Course.find({});
        req.courseData = courseData;
        next();
    }

    catch(err) {
       console.log(err);
       res.json({
        status : "Something went Wrong"
       })
    }
    
}

module.exports = displayAllCourses;