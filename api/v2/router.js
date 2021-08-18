const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.send("Welcome to the v2 API"));

module.exports = router;