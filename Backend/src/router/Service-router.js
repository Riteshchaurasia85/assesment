const express = require('express');
const services = require('../controller/services-controller');
const router = express.Router();

router.route("/data").get(services);

module.exports = router;