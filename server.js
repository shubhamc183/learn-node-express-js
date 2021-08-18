const express = require("express");
const apiRouter = require("./api/router");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hi from EXPRESS!")
});

app.use('/api', apiRouter);

module.exports = Object.create({
    app: app,
    port: port
});