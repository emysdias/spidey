const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use(express.json());

module.exports = { app };
