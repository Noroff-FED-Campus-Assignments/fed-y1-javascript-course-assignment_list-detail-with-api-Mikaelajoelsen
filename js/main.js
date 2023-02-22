const detailContainer = document.querySelector("#results");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

    const url =
      "https://rickandmortyapi.com/api/character";
    
    console.log(url);
    
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

    async function rickandmortyapi() {
       
    
      const response = await fetch(url);
      const results = await response.json();
     console.log(results);
     showSpecies(results.species);

  }

  fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => makeCards(data.results))
    
function makeCards(charactersArray){
 const cardContainer = document.querySelector
 ('#card-container')
 console.log(charactersArray)
 charactersArray.forEach(character => {
cardContainer.innerHTML = cardContainer.innerHTML + `<h2>${character.name}</h2>
<img src=${character.image}></img>`
 })

}
