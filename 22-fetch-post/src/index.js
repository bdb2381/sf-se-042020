document.addEventListener('DOMContentLoaded', function () {
  fetchAllPokemon();
});

function fetchAllPokemon() {
  fetch('http://localhost:3000/pokemon')
    .then((resp) => resp.json())
    .then((data) => {
      appendPokemon(data);
    });
}

function appendPokemon(pokePeople) {
  const pokemonContainer = document.getElementsByClassName('pokemon-container')[0];

  pokePeople.forEach((pokemon) => {
    pokemonContainer.innerHTML += renderSinglePokemon(pokemon);
  });
}

function renderSinglePokemon(pokemon) {
  return `
		<div class="pokemon-card" id="${pokemon.id}">
			<div class="pokemon-frame">
				<h1 class="center-text">${pokemon.name}</h1>
				<div class="pokemon-image">
					<img data-id="${pokemon.id}" class="toggle-sprite" src="${pokemon.sprites.front}">
				</div>
			</div>
		</div>`;
}
