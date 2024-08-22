document.addEventListener("DOMContentLoaded", () => {
  const scrapBtn = document.querySelector(".scrap-btn");
  const urlHolder = document.querySelector(".url-holder");
  const contentSelector = document.querySelector("#content-selector");
  const dataList = document.querySelector(".data-list");

  // Get user entered URL
  scrapBtn.addEventListener("click", () => {
    let givenUrl;
    let givenContent;

    if (urlHolder.value === "") {
      alert("You must enter a URL to scrap!");
    } else if (contentSelector.value === "choose") {
      alert("Select the type of data you want to scrap");
    } else {
      givenUrl = getUrl();
      givenContent = getSelectedContent();
      getScrapData(givenUrl, givenContent);
    }
  });

  function getSelectedContent() {
    let givenContent = "";
    userChoice = contentSelector.value;
    givenContent = contentSelector.value;

    return givenContent;
  }

  // Get URL
  function getUrl() {
    let givenUrl = "";
    givenUrl = urlHolder.value;

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
    displayTexts(data);
  }

  // Display text like content
  function displayTexts(data) {
    let listContainer = "";
    data.forEach((element) => {
      const li = `<li>${element}</li>`;
      listContainer += li;
    });

    dataList.innerHTML = listContainer;
  }
});
