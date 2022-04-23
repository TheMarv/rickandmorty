function fetchCharacterCardData() {
  fetch(`https://rickandmortyapi.com/api/character/${getRandomID()}`)
    .then(response => response.json())
    .then(data => {
      console.log(data[0].name);

      const card = document.querySelector('[data-js="character__card"]');
      card.innerHTML = `
<img
          src="${data[0].image}"
          alt="variable"
        />
        <figcaption>${data[0].name}</figcaption>
`;
    });
}

function getRandomID(quantity = 8) {
  return new Array(quantity)
    .fill(0)
    .map(() => Math.floor(Math.random() * (826 - 1) + 1));
}

fetchCharacterCardData();
