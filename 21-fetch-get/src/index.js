document.addEventListener("DOMContentLoaded", function () {
  handleLogoClick();
  fetchPokemon();
});

function fetchPokemon() {
  // const fetchPromise = fetch("http://localhost:3000/pokemon");

  // // fetchPromise.then((response) => console.log(response));
  // fetchPromise
  //   .then(function (response) {
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //   });

  fetch("http://localhost:3000/pokemon")
    .then((response) => response.json())
    .then((data) => renderPokemon(data));

  // fetch("https://rickandmortyapi.com/api/character/")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
}

function renderPokemon(pokePeople) {
  const allPokemonDivs = pokePeople.map((pokemon) => {
    return renderSinglePokemon(pokemon);
  });

  const pokemonContainer = document.querySelector(".pokemon-container");

  pokemonContainer.innerHTML = allPokemonDivs.join("");
}

function renderSinglePokemon(pokemon) {
  // Create a pokemon card with divs/buttons etc, the id is how we figure out which pokemon has been clicked
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

function handleLogoClick() {
  // get the logo
  const logo = document.getElementById("pokemon-logo");
  // attach event listener to the logo
  logo.addEventListener("click", function (e) {
    // look for center tag
    const textTag = document.querySelector("center");

    // textTag.innerHTML = "When in doubt hash it out";
    textTag.innerText = "When in doubt hash it out";
  });
}
