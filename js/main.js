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
