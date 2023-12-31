const Database = require('../Database/database')

async function userMiddleware(req, res, next) {
    let username = req.headers.username;
    let password = req.headers.password;
    try {
        let Data = await Database.User.findOne({
            username, password
        })
        if (Data) {
            next();
        }

        else {
            res.json({
                login: "Incorrect Details"
            })

            return;
        }
    }

    catch (err) {
        console.log(err);
        return res.json({
            status: "Something Went Wrong"
        })
    }

}

module.exports = userMiddleware;