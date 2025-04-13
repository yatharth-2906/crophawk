require('dotenv').config({ path: '../.env' });
const bcrypt = require('bcrypt');
const USERS = require('../models/user');
const {setUserSession, getUser} = require('../service/auth');

const saltRounds = parseInt(process.env.SALT_ROUNDS);

async function handleUserSignup(req, res) {
    try{
        const {name, email_id, password} = req.body;
        if(!name || !email_id || !password)
            return res.status(400).json({"err": "All fields(Name, Email and password) required."});

        const user = await USERS.findOne({email_id});
        if(user) //exists
            return res.status(400).json({"err": "User Already exists with same email id."});
        
        try {
            bcrypt.hash(password, saltRounds).then(async (hash) => {
                await USERS.create({ name, email_id, password: hash });
                return res.status(200).json({"res": "User Creater Successfully!!"});
            });
        } catch (err) {
            return res.status(400).json({"err": err});
        }
    } catch(err){
        return res.status(400).json({"err": err});
    }
}

async function handleUserLogin(req, res) {
    try{
        const {email_id, password} = req.body;
        const user = await USERS.findOne({email_id});
        if(!user)
            return res.status(400).json({"err": `Email ${email_id} doesn't exixts.`});

        const match = await bcrypt.compare(password, user.password);
        if(!match)
                res.status(400).json({"err": `Invalid Password.`});

        const token = setUserSession(user);
        res.cookie('token', token);
        return res.status(200).json({token});
    } catch(err){
        return res.status(400).json({"err": err});
    }
}

async function checkUserLoginStatus(req, res){
    try{
        const token = req.query.token;
        const user = getUser(token);
        return res.status(200).json({...user, token});
    } catch(err){
        return res.status(400).json({"err": err});
    }
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
    checkUserLoginStatus
}