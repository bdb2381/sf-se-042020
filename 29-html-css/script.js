function fetchCharacters() {
  const inputValue = document.getElementById("character-input").value;

  fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
    .then((resp) => resp.json())
    .then((data) => {
      formatCharacters(data.results);
    });
}

// Function that formats the data that has been returned from our character fetch (and appends it to the DOM)
function formatCharacters(characters) {
  const charDiv = document.getElementById("characters");
  charDiv.innerHTML = "";

  characters.forEach((character) => {
    charDiv.innerHTML += `<div class="single-character"><img src="${character.image}"><h2>${character.name}</h2></div>`;
  });
}

fetchCharacters();
