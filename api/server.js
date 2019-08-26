const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const router = require("../api/routes");

const server = express();

server.use(morgan());
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api", router);

module.exports = server;
