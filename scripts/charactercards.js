import fetchCharaterDetails from './characterDetails.js';
import { showSection } from './navigation.js';

const characterFigures = document.querySelector('[data-js="characters"]');

function fetchCharacterCardData() {
  fetch(`https://rickandmortyapi.com/api/character/${getRandomID()}`)
    .then(response => response.json())
    .then(data => {
      data.forEach(createCharacterFigure);
    });
}

function getRandomID(quantity = 8) {
  return new Array(quantity)
    .fill(0)
    .map(() => Math.floor(Math.random() * (826 - 1) + 1));
}

function createCharacterFigure(character) {
  const element = document.createElement('figure');
  element.className = 'character__card';
  element.innerHTML = `<img
  src="${character.image}"
  alt="variable"/>
<figcaption>${character.name}</figcaption>`;

  element.addEventListener('click', () => {
    fetchCharaterDetails(character.id);
    showSection(1);
  });
  characterFigures.append(element);
}

fetchCharacterCardData();
