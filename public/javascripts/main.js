document.addEventListener("DOMContentLoaded", () => {
  const scrapBtn = document.querySelector(".scrap-btn");
  const urlHolder = document.querySelector(".url-holder");
  const dataShower = document.querySelector(".data-shower");
  const contentSelector = document.querySelector("#content-selector");

  // Get user entered URL
  scrapBtn.addEventListener("click", () => {
    let givenUrl = getUrl();
    let givenContent = getSelectedContent();
    // console.log(givenUrl);
    // console.log(givenContent);
    getScrapData(givenUrl, givenContent);
  });

  function getSelectedContent() {
    let givenContent = "";
    if (contentSelector.value !== "choose") {
      givenContent = contentSelector.value;
    } else {
      alert("Select the type of data you want to scrap");
    }

    return givenContent;
  }

  // Get URL
  function getUrl() {
    let givenUrl = "";
    if (urlHolder.value) {
      givenUrl = urlHolder.value;
    } else {
      alert("You must enter a URL to scrap!");
    }

    return givenUrl;
  }

  // Get scraped data
  async function getScrapData(givenUrl, givenContent) {
    try {
      // API request to fetch data
      const response = await fetch("/scrapedata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ givenUrl, givenContent }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      displayScrappedData(data);
    } catch (error) {
      console.error("Error getting scrapped data", error);
    }
  }

  function displayScrappedData(data) {
    console.log(data);
    let listContainer = "";
    data.forEach((element) => {
      const li = `<li>${element}</li>`;
      listContainer += li;
    });

    dataShower.innerHTML = listContainer;
  }
});
