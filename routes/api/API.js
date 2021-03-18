const router = require("express").Router();
const controller = require("../../controllers/userController.js");

router.route("/")
  .post(controller.create)
  .get(controller.findAll)

module.exports = router;
