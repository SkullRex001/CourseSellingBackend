const Database = require('../Database/database')
async function adminMiddleware(req, res, next) {
    let username = req.headers.username;
    let password = req.headers.password;
    try {
        let data = await Database.Admin.findOne({
            username, password
        })

        if (data) {
            next()  
        }
        else {
            return res.json({
                Login: "Denied"
            })      
        }

    }

    catch (err) {
        console.log(err);
        return res.json({
            Error: "Something went Wrong"
        })

        

    }


}

module.exports = adminMiddleware;