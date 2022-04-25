const episodeDetailContainer = document.querySelector(
  '[data-js="episodeDetails"]'
);
const episodeDetailName = episodeDetailContainer.querySelector('h2');
const episodeDetailType = episodeDetailContainer.querySelector(
  '[data-js="episodeType"]'
);
const episodeDetailDimension = episodeDetailContainer.querySelector(
  '[data-js="episodeDimension"]'
);
const episodeDetailResidents = document.querySelector(
  '[data-js="characterList"]'
);

export function fetchEpisodeDetails(id = 1) {
  fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    .then(response => response.json())
    .then(({ name, episode, air_date, characters }) => {
      episodeDetailResidents.innerHTML = '';
      episodeDetailName.textContent = name;
      episodeDetailType.textContent = `Episode: ${episode}`;
      episodeDetailDimension.textContent = `Air Date: ${air_date}`;
      characters.slice(0, 5).forEach(residentURL => {
        fetchCharacterDetails(residentURL).then(character => {
          const characterCard = document.createElement('div');
          characterCard.className = 'charactercard';
          characterCard.innerHTML = `
            <img src="${character.image}" alt="${character.name}" />
            <div class="charactercard__details">
              <h2>${character.name}</h2>
              <p>${character.name} is a ${character.gender} ${character.species}. ${character.name}'s current status is ${character.status}</p>
            </div>
          `;
          episodeDetailResidents.append(characterCard);
        });
      });
    });
}

function fetchCharacterDetails(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

fetchEpisodeDetails();
