document.addEventListener("DOMContentLoaded", function () {
  fetchAllPokemon();
  listenToFormSubmit();
  listenToDeleteButtonClicks();
});

function listenToDeleteButtonClicks() {
  const pokemonContainer = document.querySelector(".pokemon-container");

  pokemonContainer.addEventListener("click", function (e) {
    if (e.target.className === "pokemon-button") {
      // 1. update backend
      // const pokemonId = e.target.parentElement.parentElement.id;
      // const pokemonId = parseInt(e.target.dataset.id);
      const pokemonId = +e.target.dataset.id;

      // fetch DELETE "http://localhost:3000/pokemon/:id"
      fetch(`http://localhost:3000/pokemon/${pokemonId}`, { method: "DELETE" });

      // 2. update frontend
      // optimistic render
      document.getElementById(pokemonId).remove();
      // e.target.parentElement.parentElement.remove();
    }
  });
}

// 1. listen for a form submit
function listenToFormSubmit() {
  const pokemonForm = document.getElementById("pokemon-post-form");

  pokemonForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // 2. find input fields and get their values
    // const nameInput = document.getElementById('name-input');
    const nameInput = e.target.name;
    const spriteFrontInput = e.target.spriteFront;
    const spriteBackInput = e.target.spriteBack;

    const name = nameInput.value;
    const spriteFront = spriteFrontInput.value;
    const spriteBack = spriteBackInput.value;

    const data = {
      name: name,
      sprites: {
        front: spriteFront,
        back: spriteBack,
      },
    };

    // 3. update our backend
    const requestObj = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:3000/pokemon", requestObj)
      .then((resp) => resp.json())
      .then((newPokemon) => {
        // 4. update our frontend
        // pessimistic render
        const pokemonContainer = document.querySelector(".pokemon-container");
        pokemonContainer.innerHTML += renderSinglePokemon(newPokemon);
      });

    // 4. update our frontend
    // optimistic render
    // const pokemonContainer = document.querySelector(".pokemon-container");
    // pokemonContainer.innerHTML += renderSinglePokemon(data);

    nameInput.value = "";
    spriteFrontInput.value = "";
    spriteBackInput.value = "";
  });
}

function fetchAllPokemon() {
  const fetchPromise = fetch("http://localhost:3000/pokemon");

  fetchPromise
    .then((resp) => resp.json())
    .then((data) => {
      appendPokemon(data);
    });
}

function appendPokemon(pokePeople) {
  const pokemonContainer = document.querySelector(".pokemon-container");

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
        <button data-id="${pokemon.id}" class="pokemon-button">Delete</button>
			</div>
		</div>`;
}
