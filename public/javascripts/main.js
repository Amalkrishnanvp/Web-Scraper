document.addEventListener("DOMContentLoaded", () => {
  const scrapBtn = document.querySelector(".scrap-btn");
  const urlHolder = document.querySelector(".url-holder");

  // Get user entered URL
  scrapBtn.addEventListener("click", () => {
    let givenUrl;
    if (urlHolder.value) {
      givenUrl = urlHolder.value;
    } else {
      alert("You must enter a URL to scrap!");
    }
    getScrapData(givenUrl);
  });

  // Get scraped data
  async function getScrapData(givenUrl) {
    try {
      // API request to fetch data
      const response = await fetch("/scrapedata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ givenUrl }),
      });

      //   if (!response.ok) {
      //     throw new Error("Network response was not ok");
      //   }

      //   const data = response.json();
      //   displayScrappedData(data);
    } catch (error) {
      console.error("Error getting scrapped data", error);
    }
  }

  function displayScrappedData(data) {
    console.log(data);
  }
});
