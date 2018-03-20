var router = require("express").Router();
var scrape = require("../scripts/scrape");
var axios = require("axios");

router.get("/", scrape)

module.exports = router
