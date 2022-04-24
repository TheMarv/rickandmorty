const charDetailsSection = document.querySelector(
  '[data-js="character__details"]'
);

function fetchCharaterDetails(id = 10) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const episodeNum = data.episode[0].split('/').pop();

      const charDetailsElem = document.createElement('div');
      charDetailsElem.className = 'character__details--frame';
      charDetailsElem.innerHTML = `
      <img
            src="${data.image}"
            alt="picture of ${data.name}"
          />
          <div class="character__details-text">
            <h2>${data.name}</h2>
            <h3>Gender: §{data.gender}</h3>
            <h3>Origin: §{data.origin.name}</h3>
            <h3>Last location: ${data.location.name}</h3>
            
            <h3>First appeared in episode ${episodeNum}</h3>
            `;
      charDetailsSection.append(charDetailsElem);
    });
}

fetchCharaterDetails();
