const url = "https://rickandmortyapi.com/api/character";

fetch(url)
  .then((response) => response.json())
  .then((data) => makeCards(data.results));

function makeCards(charactersArray) {
  const cardContainer = document.querySelector("#card-container");

  charactersArray.forEach((character) => {
    cardContainer.innerHTML += `
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
