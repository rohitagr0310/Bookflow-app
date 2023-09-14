const express = require("express");
const serverless = require("serverless-http");

const api = express();

const router = express.Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api", router);

module.exports.handler = serverless(api);
