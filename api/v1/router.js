const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.send("Welcome to the v1 API"));

// Middleware for this router
router.use((req, res, next) => {
    console.log(`v1 API ${req.url} called`);
    next();
});

router.get('/getUsers', (req, res) => {
    req.container.resolve('getUsers').handleRequest(req, res);
});

router.post('/createUser', (req, res) => {
    req.container.resolve('createUser').handleRequest(req, res);
})

module.exports = router;