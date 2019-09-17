var router = require("express").Router();

// bring in our headline controller
var headlineController = require("../../controllers/headline");

// api route to find all of the articles
router.get("/", headlineController.findAll);
router.delete("/:id", headlineController.delete);
router.put("/:id", headlineController.update);

module.exports = router;
