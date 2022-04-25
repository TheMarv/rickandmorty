const navCharacter = document.querySelector('[data-js="navCharacter"]');
const navLocation = document.querySelector('[data-js="navLocation"]');
const navEpisode = document.querySelector('[data-js="navEpisode"]');
export const sections = [
  document.querySelector('[data-js="characters"]'),
  document.querySelector('[data-js="character__details"]'),
  document.querySelector('[data-js="locations"]'),
  document.querySelector('[data-js="locationdetails"]'),
  document.querySelector('[data-js="episodes"]'),
  document.querySelector('[data-js="episodeDetails"]'),
];

export function showSection(index) {
  sections.forEach(section => section.setAttribute('hidden', ''));
  sections[index].removeAttribute('hidden');
}

navCharacter.addEventListener('click', () => showSection(0));
navLocation.addEventListener('click', () => showSection(1));
navEpisode.addEventListener('click', () => showSection(3));
