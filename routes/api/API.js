const router = require("express").Router();
const controller = require("../controllers/userController");

// Matches with "/api/books"
router.route("/")
  .post(controller.create);

module.exports = router;
