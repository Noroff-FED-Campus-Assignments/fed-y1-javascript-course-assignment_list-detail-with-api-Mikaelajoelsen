const detailContainer = document.querySelector("#js-results");
const searchEl = document.querySelector("#js-search");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

console.log(detailContainer);

const id = params.get("id");

const url = `https://rickandmortyapi.com/api/character/${id}`;


console.log(id);

async function fetchCharacters(searchValue ="") {
  
  try {
  detailContainer.innerHTML = `<div class="loader"></div>`;

  const response = await fetch(url);
  const results = await response.json();
  console.log("results",results);

  detailContainer.innerHTML =
  `
  <div class="card-details">
  <div class ="container">
  <h1>${results.name}</h1>
  <img src=${results.image}>
  <p>${results.name}</p>
  <p>${results.species}</p>
  <p>${results.gender}</p>
  <p>${results.name}</p>
  </div>
  </div>
  `;

} catch(error){
      console.log("error message",error);
      return null; 
  }
   };

   fetchCharacters();
  
   
