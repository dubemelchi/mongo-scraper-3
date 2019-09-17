var router = require("express").Router();

// bring in our fetch controller
var fetchController = require("../../controllers/fetch");

// api route to fetch all of the articles
router.get("/", fetchController.scrapeHeadlines);

module.exports = router;
