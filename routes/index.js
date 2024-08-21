const express = require("express");
const router = express.Router();

/* GET Home page */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Web Scrapper",
  });
});

module.exports = router;
