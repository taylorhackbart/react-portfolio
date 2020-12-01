const router = require("express").Router();
const controller = require("../../controllers/userController.js");

// Matches with "/api/books"
router.route("/contact")
  .post(controller.create);

module.exports = router;
