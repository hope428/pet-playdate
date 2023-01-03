const router = require("express").Router();

router.get("/home", (req, res) => {
  res.render("homepage");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/form", (req, res) => {
  res.render("form");
});
module.exports = router;
