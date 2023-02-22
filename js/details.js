const detailContainer = document.querySelector("#js-results");
const searchEl = document.querySelector("#js-search");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

console.log(detailContainer);

const id = params.get("id");

console.log(id);
searchEl.addEventListener("keyup",function (event){
  const searchValue = event.target.value.trim().toLowerCase();
  fetchCharacters(searchValue);
});

async function fetchCharacters(searchValue ="") {
  const url = `https://rickandmortyapi.com/api/character`;
  
  try {
  detailContainer.innerHTML = `<div class="loader"></div>`;

  const response = await fetch(url);
  const results = await response.json();
  console.log(results);

  const characters = json.results;

  const filteredCharacters =characters.filter(function(name){
    return characters.name.toLowerCase().startsWith(searchValue);
  });

  detailContainer.innerHTML =``;

  filteredCharacters.forEach(function(results) {
    detailContainer.innerHTML += `<a href="/details.html?id=${results.id}" class="results">
    <div class="results" style="background-image: url('${results.image}')"></div>
    <div class="details"><h4 class="name">${results.name}</h4><p>Species:${results.species}</p></div><a/>`;
  });
  }
  catch(error){
      console.log("error message",error);
      return null; 
  }
   };
  
   
 