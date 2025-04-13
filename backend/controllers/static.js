async function handleHomePage(req, res){
    return res.status(200).json({"msg": `Hello From ${req.headers.host}`});
}

module.exports = {handleHomePage};