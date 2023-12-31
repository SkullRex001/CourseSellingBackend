const Database = require('../Database/database')


async function userCreateAccount(req , res , next) {
    let username = req.headers.username;
    let password = req.headers.password;

    try{
        await Database.User.create({

            username , password
        })
        next();
    }

    catch(err) {
        if(err) {
            console.log(err);
           return res.json({
                Status : "Something Went Wrong"
            })
        }
    }
   
}

module.exports = userCreateAccount;