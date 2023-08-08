const countryInp = document.getElementById("country-inp");
const searchBtn = document.getElementById("search-btn");
const resultsDiv = document.getElementById("results");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  body.classList.add("dark-theme");
}


searchBtn.addEventListener("click", () => {
  const countryName = countryInp.value;
  const finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        resultsDiv.innerHTML = `<p>No results found for ${countryName}</p>`;
      } else {
        const country = data[0];
        resultsDiv.innerHTML = `
          <h3>${country.name.common}</h3>
          <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
          <p>Square kilometers: ${country.area}</p>
        `;
      }
    });
});



