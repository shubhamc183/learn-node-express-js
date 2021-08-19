const express = require("express");
const routerV1 = require('./v1/router');
const routerV2 = require('./v2/router');
const router = express.Router();

router.get('/', (req, res, next) => res.send("v1/ or v2/"));
router.use('/v1', routerV1);
router.use('/v2', routerV2);

module.exports = router;