const Database = require('../Database/database')

async function createAdminAccount(req , res , next) {

    let username = req.headers.username;
    let password = req.headers.password;

    try{
        let data = await Database.Admin.create({
            username , password
        })
    
        if(data) {
            next();
        }
        else {
            return res.json({
                status : "Something Went wrong"
            })
           
        }

    }

    catch(err) {
        console.log(err);
        res.json({
            status : "Something went wrong"
        })
    }

}

module.exports = createAdminAccount;