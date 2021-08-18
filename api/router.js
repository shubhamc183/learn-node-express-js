const express = require("express");
const routerV1 = require('./v1/router');
const routerV2 = require('./v2/router');
const router = express.Router();

router.get('/', (req, res) => res.send("v1/ or v2/"));
router.use('/v1', (req, res, next) => next(), routerV1);
router.use('/v2', (req, res, next) => next(), routerV2);

module.exports = router;