const Database = require('../Database/database');
async function userBuyCourses(req, res, next) {
    let coursesToBuy = req.headers.courseName;
    console.log(coursesToBuy)
    let username = req.decodedUsername;
    console.log(username);
    try {
        let courseData = await Database.Course.findOne({
            title: coursesToBuy
        })
        console.log(courseData);

        console.log(courseData);
        if (courseData) {
          await Database.User.updateOne({
                username
            }, {
                "$push": {

                    PurchasedCourses: courseData._id

                }
            })

            next()
        }

        else {

            res.json({
                status: "Course Does Not Exist"
            })

        }

    }

    catch(err) {
        console.log(err);
        res.json({
            Status : "Something went wrong"
        })
    }
   
}

module.exports = userBuyCourses;