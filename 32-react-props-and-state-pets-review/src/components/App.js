import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  onFindPetsClick = () => {
    const { type } = this.state.filters;
    // const type = this.state.filters.type;

    const url = `/api/pets${type === "all" ? "" : "?type=" + type}`;

    fetch(url)
      .then((resp) => resp.json())
      .then((pets) => {
        this.setState({
          pets: pets,
        });
      });
  };

  onChangeType = (event) => {
    const petType = event.target.value;

    this.setState({
      filters: {
        type: petType,
      },
    });
  };

  onAdoptPet = (petId) => {
    // forEach, map, find, filter
    const newPets = this.state.pets.map((pet) => {
      if (pet.id === petId) {
        return { ...pet, isAdopted: true };
      } else {
        return pet;
      }
    });

    this.setState({ pets: newPets });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.onChangeType}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
