const express = require("express");
const router = express.Router();

const axios = require("axios");
const cheerio = require("cheerio");

/* POST data */
router.post("/", async (req, res, next) => {
  const givenUrl = req.body.givenUrl;

  try {
    const { data } = await axios.get(givenUrl);

    const $ = cheerio.load(data);

    const values = [];
    $("div").each((index, element) => {
      values.push($(element).text());
    });

    res.status(200).json(values);
  } catch (error) {
    console.error("Error scrapping data: ", error);
    res.status(500).json({ message: "Error scrapping data" });
  }
});

module.exports = router;
