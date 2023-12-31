const Database = require('../Database/database')
async function adminAlreadyExist(req, res, next) {
    let username = req.headers.username;
    let password = req.headers.password;
    try {
        let data = await Database.Admin.findOne({
            username, password
        })
        if (data) {
            return res.json({
                Status: "Admin Already Exist"
            })
            
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
        return res.json({
            status: "Something Went Wrong"
        })

       
    }
}

module.exports = adminAlreadyExist;