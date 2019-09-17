var router = require("express").Router();

// bring in our clear controller
var clearController = require("../../controllers/clear");

// api route to delete all of the articles
router.get("/", clearController.clearDB);

module.exports = router;
