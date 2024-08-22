const express = require("express");
const router = express.Router();

const axios = require("axios");
const cheerio = require("cheerio");

/* POST data */
router.post("/", async (req, res, next) => {
  const givenUrl = req.body.givenUrl;
  const givenContent = req.body.givenContent;
  const usersChoice = getUsersChoice(givenContent);

  try {
    const { data } = await axios.get(givenUrl);

    const $ = cheerio.load(data);

    const values = [];

    $(usersChoice).each((index, element) => {
      values.push($(element).text());
    });

    res.status(200).json(values);
  } catch (error) {
    console.error("Error scrapping data: ", error);
    res.status(500).json({ message: "Error scrapping data" });
  }
});

function getUsersChoice(givenContent) {
  switch (givenContent) {
    case "head1":
      return "h1";
      break;
    case "head2":
      return "h2";
      break;
    case "head3":
      return "h3";
      break;
    case "para":
      return "p";
      break;
    case "div":
      return "div";
      break;

    default:
      break;
  }
}

module.exports = router;
