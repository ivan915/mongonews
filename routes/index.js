var router = require("express").Router();
var scrape = require("../scripts/scrape");

router.get("/", scrape)

module.exports = router
