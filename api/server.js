const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(morgan());
server.use(express.json());
server.use(helmet());
server.use(cors());

module.exports = server;
