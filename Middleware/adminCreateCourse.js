const Databse = require('../Database/database');
async function createCourse(req, res, next) {
    let jwtDecoded = req.data;
    let title = req.headers.title;
    let description = req.headers.description;
    let link = req.headers.link;
    let price = req.headers.price;

    try {
        let courseData = await Databse.Course.create({
            title, description, link, price
        })

        let updateAdminCourse = await Databse.Admin.updateOne({
            username: jwtDecoded.username,
        }, {
            "$push": {

                MadeCourses: courseData._id

            }
        })

        if (courseData) {
            next();
        }
        else {
            res.json({
                status: "something went wrong"
            })
        }
    }

    catch (err) {
        console.log(err);
        res.json({
            status: "Something went wrong"
        })
    }

}

module.exports = createCourse;