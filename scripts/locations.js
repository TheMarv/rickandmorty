import { showSection } from './navigation.js';
import { fetchLocationDetails } from './locationDetails.js';
const locationContainer = document.querySelector('[data-js="locations"]');

fetch(`https://rickandmortyapi.com/api/location`)
  .then(response => response.json())
  .then(data => {
    const { results } = data;
    results.forEach(location => {
      const dimension =
        location.dimension === 'unknown'
          ? 'in an unknown dimension'
          : location.dimension;
      const locationElement = document.createElement('div');
      locationElement.className = 'location';
      locationElement.innerHTML = `
        <h3>${location.name}</h3>
        <p>A ${location.type} located in ${dimension}</p>
      `;
      locationElement.addEventListener('click', () => {
        fetchLocationDetails(location.id);
        showSection(3);
      });
      locationContainer.append(locationElement);
    });
  });
