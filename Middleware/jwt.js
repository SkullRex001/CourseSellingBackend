const jwt = require('jsonwebtoken');
let key = "MYKEY"
function createJWT(req, res, next) {
    let username = req.headers.username;
    let token = jwt.sign({
        username , admin : true
    }, key);
    req.token = token;
    next()
}

function verifyJWT(req , res , next) {
    let token  = req.headers.authorization;

    try{
        let data = jwt.verify(token,key);
        req.data = data;
   
        if(data.admin) {
            next();
        }
        else{
            return res.json({
                status : "You are not admin"
            })
        }
       
    }

    catch(err) {
        console.log(err);
      return  res.json({
            status : "auntorization failed"
        })
    }

}

module.exports = {
    createJWT , verifyJWT
}