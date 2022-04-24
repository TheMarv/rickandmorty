const navCharacter = document.querySelector('[data-js="navCharacter"]');
const navLocation = document.querySelector('[data-js="navLocation"]');
const navEpisode = document.querySelector('[data-js="navEpisode"]');
const sections = [
  document.querySelector('[data-js="characters"]'),
  document.querySelector('[data-js="locations"]'),
  document.querySelector('[data-js="locationdetails"]'),
  document.querySelector('[data-js="episodes"]'),
  document.querySelector('[data-js="episodeDetails"]'),
];

navCharacter.addEventListener('click', () => {
  sections.forEach(section => section.setAttribute('hidden', ''));
  sections[0].removeAttribute('hidden');
});

navLocation.addEventListener('click', () => {
  sections.forEach(section => section.setAttribute('hidden', ''));
  sections[1].removeAttribute('hidden');
});

navEpisode.addEventListener('click', () => {
  sections.forEach(section => section.setAttribute('hidden', ''));
  sections[3].removeAttribute('hidden');
});
