require('dotenv').config({ path: '../.env' }); 
const jwt = require('jsonwebtoken');

const secretKey = String(process.env.JWT_SECRET);

function setUserSession(user){
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email_id
    }
    return jwt.sign(payload, secretKey);
}

function getUser(token){
    if(!token)
        return null;

    return jwt.verify(token, secretKey);

}

module.exports = {
    getUser,
    setUserSession
}