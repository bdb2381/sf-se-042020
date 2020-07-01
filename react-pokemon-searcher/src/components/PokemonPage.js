import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    inputValue: "",
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then((resp) => resp.json())
      .then((data) => this.setState({ pokemon: data }));
  }

  handleSearch = (inputValue) => {
    this.setState({ inputValue: inputValue });
  };

  filterPokemon = () => {
    const lowerCaseInput = this.state.inputValue.toLowerCase();

    const filteredPokemon = this.state.pokemon.filter((poke) => {
      const lowerCaseName = poke.name.toLowerCase();

      return lowerCaseName.includes(lowerCaseInput);
    });

    return filteredPokemon;
  };

  addNewPokemon = (newPokemon) => {
    console.log(newPokemon);

    const correctStructure = {
      name: newPokemon.name,
      hp: newPokemon.hp,
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl,
      },
    };

    // update backend: make a fetch POST request
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(correctStructure),
    });

    // update frontend: update state
    this.setState({ pokemon: [correctStructure, ...this.state.pokemon] });
  };

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon} />
        <br />
        <Search handleSearch={this.handleSearch} />
        <br />
        <PokemonCollection pokemon={this.filterPokemon()} />
      </Container>
    );
  }
}

export default PokemonPage;
