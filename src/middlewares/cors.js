const cors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Origin", "http://enlacesbosto.dnsalias.com/");
    next();
}

module.exports = cors;