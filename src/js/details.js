const detailContainer = document.querySelector("#js-results");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = `https://rickandmortyapi.com/api/character/${id}`;

async function fetchCharacters() {
  try {
    detailContainer.innerHTML = `<div class="loader"></div>`;

    const response = await fetch(url);
    const results = await response.json();

    detailContainer.innerHTML = `
  <div class="card-details">
  <div class ="container">
  <h2>${results.name}</h2>
  <img src=${results.image}>
  <p>${results.name}</p>
  <p>${results.species}</p>
  <p>${results.gender}</p>
  <p>${results.name}</p>
  </div>
  </div>
  `;
  } catch (error) {
    console.log("error message", error);
    return null;
  }
}

fetchCharacters();
