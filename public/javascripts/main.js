document.addEventListener("DOMContentLoaded", () => {
  const scrapBtn = document.querySelector(".scrap-btn");
  const urlHolder = document.querySelector(".url-holder");

  scrapBtn.addEventListener("click", () => {
    if (urlHolder.value) {
      const givenUrl = urlHolder.value;
      console.log(givenUrl);
    } else {
      alert("You must enter a UR to scrap!");
    }
  });
});
