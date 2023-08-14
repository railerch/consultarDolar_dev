const express = require("express");
const APP = express();
const PATH = require("path");
const URL = require("url");
const config = require("./config.json");
const DIVISAS = require("./routers/tasa-cambio-rt");
const CORS = require("./middlewares/cors");

// CONFIG
APP.set("server", config[0].server);
APP.set("port", config[0].port);
APP.set("view engine", "ejs");
APP.set("views", PATH.join(__dirname, "views"));

// MIDDLEAWARES
APP.use(CORS);
APP.use("/", express.static(PATH.join(__dirname, "public")))
APP.use("/jq", express.static(PATH.join(__dirname, "../node_modules/jquery/dist")))
APP.use("/bs", express.static(PATH.join(__dirname, "../node_modules/bootstrap/dist")))
APP.use("/bsi", express.static(PATH.join(__dirname, "../node_modules/bootstrap-icons/font")))
APP.use("/dt", express.static(PATH.join(__dirname, "../node_modules/datatables/media")))
APP.use(express.urlencoded({ extended: false }));

// ROUTES
APP.get("/", (req, res) => {
    res.header("content-type", "text/html").render("index", {
        host: `${config[1].server}:${config[1].port}`,
        logo: config[2].logo,
        empresa: config[2].empresa,
        favicon: config[2].favicon
    });
    res.end();
})

APP.use("/divisas", DIVISAS);

// SERVER
APP.listen(APP.get("port"), () => {
    console.log(`Server at: http://${APP.get("server")}:${APP.get("port")}`);
})