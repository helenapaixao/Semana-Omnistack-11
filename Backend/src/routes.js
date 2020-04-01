const express = require("express");
const OngController = require("./Controllers/OngController");
const IncidentController = require("./Controllers/IncidentController");
const ProfileController = require("./Controllers/ProfileController");
const SessionController = require("./Controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
