const express = require("express");
const ROUTER = express.Router();
const tasaCambioCtrl = require("../controllers/tasa-cambio-ctrl");

ROUTER.get("/:fuente", tasaCambioCtrl.consultar_fuentes);

module.exports = ROUTER;