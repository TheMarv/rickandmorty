import { showSection } from './navigation.js';
import { fetchEpisodeDetails } from './episodeDetails.js';
const episodeContainer = document.querySelector('[data-js="episodes"]');

fetch(`https://rickandmortyapi.com/api/episode`)
  .then(response => response.json())
  .then(data => {
    const { results } = data;
    results.forEach(({ name, episode, air_date }) => {
      const episodeElement = document.createElement('div');
      episodeElement.className = 'episode';
      episodeElement.innerHTML = `
        <h3>${name}</h3>
        <p>${name} has the episode code ${episode} and aired on ${air_date}</p>
      `;
      episodeElement.addEventListener('click', () => {
        fetchEpisodeDetails(episode.id);
        showSection(5);
      });
      episodeContainer.append(episodeElement);
    });
  });
