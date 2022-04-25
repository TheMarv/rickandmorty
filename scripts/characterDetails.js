const charDetailsSection = document.querySelector(
  '[data-js="character__details"]'
);

export default function fetchCharaterDetails(id = 10) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => {
      charDetailsSection.innerHTML = '';
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
            <h3>First appeared in episode ${episodeNum}</h3>
            <h3>Gender: ${data.gender}</h3>
            <h3>Species: ${data.species}</h3>
            <h4>Origin: ${data.origin.name}</h4>
            <p>${data.type}</p>
            <p>Last seen in ${data.location.name}</p>
            `;
      charDetailsSection.append(charDetailsElem);
    });
}
