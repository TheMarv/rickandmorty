const locationDetailContainer = document.querySelector(
  '[data-js="locationdetails"]'
);
const locationDetailName = locationDetailContainer.querySelector('h2');
const locationDetailType = locationDetailContainer.querySelector(
  '[data-js="locationType"]'
);
const locationDetailDimension = locationDetailContainer.querySelector(
  '[data-js="locationDimension"]'
);
const locationDetailResidents = document.querySelector(
  '[data-js="residentList"]'
);

export function fetchLocationDetails(id = 1) {
  fetch(`https://rickandmortyapi.com/api/location/${id}`)
    .then(response => response.json())
    .then(data => {
      locationDetailResidents.innerHTML = '';
      locationDetailName.textContent = data.name;
      locationDetailType.textContent = `Type: ${data.type}`;
      locationDetailDimension.textContent = `Dimension: ${data.dimension}`;
      data.residents.slice(0, 5).forEach(residentURL => {
        fetchCharacterDetails(residentURL).then(resident => {
          const characterCard = document.createElement('div');
          characterCard.className = 'charactercard';
          characterCard.innerHTML = `
            <img src="${resident.image}" alt="${resident.name}" />
            <div class="charactercard__details">
              <h2>${resident.name}</h2>
              <p>${resident.name} is a ${resident.gender} ${resident.species}. ${resident.name}'s current status is ${resident.status}</p>
            </div>
          `;
          locationDetailResidents.append(characterCard);
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

fetchLocationDetails();
