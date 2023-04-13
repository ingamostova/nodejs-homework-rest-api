const express = require("express");
const ctrl = require("../../controllers/auth");
const { validateBody, authenticate } = require("../../middlewares");
const schemas = require("../../schemas/users");

const router = express.Router();

router.post("/register", validateBody(schemas.registeSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/subscription",
  authenticate,
  validateBody(schemas.updateSubscription),
  ctrl.updateSubscription
);

module.exports = router;
