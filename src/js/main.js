const detailContainer = document.querySelector("#js-results");

const url = "https://rickandmortyapi.com/api/character";

async function fetchresults() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(results);

    createHtml(results);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("this is data", data);
    console.log("this is results", data.results);
    makeCards(data.results);
  });

function makeCards(charactersArray) {
  const cardContainer = document.querySelector("#card-container");
  console.log(charactersArray);
  charactersArray.forEach((character) => {
    cardContainer.innerHTML = cardContainer.innerHTML += `
  <a href="details.html?id=${character.id}" class="container">
    <h2>${character.name}</h2>
    <img src=${character.image}></img>
    <p class="name">Name:${character.name}</p>
    <p class="gender">Gender:${character.gender}</p>
    <p class="species">Species:${character.species}</p>
  </a>
  `;
  });
}
