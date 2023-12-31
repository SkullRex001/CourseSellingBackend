const JWT = require('jsonwebtoken');
let KEY = "USERKEY"
function userJWT(req, res, next) {
    let username = req.headers.username;
    let JWTuser = JWT.sign({
        username
    }, KEY)
    req.JWTuser = JWTuser;
    next()
}

function decodeUserJWT(req , res , next) {
    let userJWT = req.headers.authorization;
    let decodedJWT = JWT.verify(userJWT , KEY);
    let decodedUsername = decodedJWT.username
    req.decodedUsername = decodedUsername;
    next();
}
module.exports = {
    userJWT , decodeUserJWT
}