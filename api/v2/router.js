const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/', (req, res) => res.send("Welcome to the v2 API"));

// dirname provides the absolute path of the this file that can 'joined'(os independent)
// for forming a path to html file
router.get('/landing', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '../', 'views', 'v2', 'index.html'));
});

module.exports = router;