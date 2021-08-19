const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.send("Welcome to the v1 API"));

router.get('/getUsers', (req, res) => {
    req.container.resolve('getUsers').handleRequest(req, res);
});

module.exports = router;