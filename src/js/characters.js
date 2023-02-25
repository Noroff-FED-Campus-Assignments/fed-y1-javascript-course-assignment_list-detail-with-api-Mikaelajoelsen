const resultsContainer = document.querySelector("#js-results");
const formEl = document.querySelector("#js-search-form");
const searchEl = document.querySelector("#js-search");
const minRatingEl = document.querySelector("#js-min-characters");
const orderByEl = document.querySelector("#js-order-by");

const url =
  "https://rickandmortyapi.com/api/character";

let fetchedCharacters = [];
let results  = JSON.parse(localStorage.getItem("fetchedResults "));

if (results) renderResults ();

fetchResults();

formEl.addEventListener("submit", function (event){
  event.preventDefault();

  results  = filterResults (results, searchEl.value, minResultsEl.value);
  renderResults();
});

searchEl.addEventListener("keyup", (event) => {
    results  = filterResults(fetchedResults, event.target.value);
  renderResults();
});

searchEl.addEventListener("search", (event) => {
  results  = filterResults(fetchedResults, event.target.value);
  renderResults();
});

orderByEl.addEventListener("change", (event) => {
results  = sortResults(results, event.target.value);
  renderCharacters();
});

async function fetchResults(searchValue = "", ratingValue = "") {
  try {
    if (!results) resultsContainer.innerHTML = `<div class="loader"></div>`;

    const response = await fetch(url);
    const { results } = await response.json();

    const filteredResults = filterResults(results, searchValue, ratingValue);

    fetchedResults = sortResults(filteredResults, orderByEl.value);
    localStorage.setItem("fetchedResults", JSON.stringify(fetchedResults));
    results = fetchedResults;

    renderResults(results);
  } catch (error) {
    console.log(error);
  }
}

function filterResults(
  list = results ?? [],
  searchValue = "",
  ratingValue = null
) {
  if (!searchValue && !ratingValue) return list;

  return list.filter(({ rating, name }) => {
    const formattedSearchValue = searchValue.trim().toLowerCase();

    if (ratingValue) {
      return (
        rating >= ratingValue &&
        name.toLowerCase().includes(formattedSearchValue)
      );
    }

    return name.toLowerCase().includes(formattedSearchValue);
  });
}

function sortResults(list = characters ?? [], orderByValue) {
  return list.sort(function (a, b) {
    if (orderByValue === "name-ascending") {
      return a.name.localeCompare(b.name);
    } else if (orderByValue === "name-descending") {
      return b.name.localeCompare(a.name);
    }
  });
}

function renderResults(
  list = results ?? [],
  containerEl = resultsContainer ?? document.createElement("div")
) {
  containerEl.innerHTML = ``;

  list.forEach(
    ({
      id = "",
      results_image = "",
      name = "",
      characters = "",
      clip,
    }) => {
      const image = clip?.clip ?? results_image;

      containerEl.innerHTML += `
            <a href="/index.html?id=${id}" class="card">
                <div class="image" style="background-image: url(${image});"></div>
                <div class="details">
                    <h4 class="name">${name}</h4>
                    <p>Rating: <strong>${rating}</strong></p>
                </div>
            </a>
            `;
    }
  );
}

