// PACKAGE REF
// https://www.npmjs.com/package/consulta-dolar-venezuela

const consulta = require("consulta-dolar-venezuela");

// CONSULTA GLOBAL DE DIVISAS
const consultar_fuentes = (req, res) => {
    let fuente = req.params.fuente != "todo" ? req.params.fuente.toUpperCase() : null;
    consulta.getMonitor(`${fuente}`, "price").then(val => {
        res.status(200).header("content-type", "application/json").send(JSON.stringify(val)).end();
    })
}

module.exports = { consultar_fuentes };