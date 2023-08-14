// PACKAGE REF
// https://www.npmjs.com/package/consulta-dolar-venezuela

const consulta = require("consulta-dolar-venezuela");
const config = require("../config.json");

// CONSULTA GLOBAL DE DIVISAS
const consultar_fuentes = (req, res) => {
    // Validar datos de autorizacion
    if (req.headers.authorization) {
        // Validar credenciales de autenticacion
        let cred = atob(req.headers.authorization.split(" ")[1]).split(":");
        if (cred[0] === config[3].user && cred[1] === config[3].pass) {
            let fuente = req.params.fuente != "todo" ? req.params.fuente.toUpperCase() : null;
            consulta.getMonitor(`${fuente}`, "price").then(val => {
                res.status(200).header("content-type", "application/json").send(JSON.stringify(val)).end();
            })
        } else {
            res.status(401).header("content-type", "application/json").send(JSON.stringify({ credErr: "Credenciales invalidas, acceso denegado." })).end();
        }
    } else {
        res.status(401).header("content-type", "application/json").send(JSON.stringify({ credErr: "Credenciales no especificadas, acceso denegado." })).end();
    }
}

module.exports = { consultar_fuentes };