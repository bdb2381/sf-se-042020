import React, { Component } from "react";

import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./Hogs/HogList";
import Filters from "./Filters";

class App extends Component {
  state = {
    showGreased: false,
    sortBy: "name",
    banishedHogs: [],
  };

  handleToggleGreased = () => {
    this.setState({ showGreased: !this.state.showGreased });
  };

  handleSortHogs = (e) => {
    this.setState({
      sortBy: e.target.value,
    });
  };

  handleBanishHog = (hog) => {
    this.setState({
      banishedHogs: [...this.state.banishedHogs, hog],
    });
  };

  filterGreased = () => {
    let filtered = hogs;

    if (this.state.showGreased) {
      // filter the hogs that are greased
      filtered = hogs.filter((hog) => hog.greased);
    }

    return filtered;
  };

  sortHogs = () => {
    const filteredByGreasedHogs = this.filterGreased();
    let sortedHogs = [];

    // sort the hogs based on weight
    if (this.state.sortBy === "weight") {
      sortedHogs = filteredByGreasedHogs.sort(function (a, b) {
        return a.weight - b.weight;
      });
    }

    // sort the hogs based on name
    if (this.state.sortBy === "name") {
      sortedHogs = filteredByGreasedHogs.sort((a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    }

    return sortedHogs;
  };

  filterBanished = () => {
    // filter the hogs that are banished
    return this.sortHogs().filter((hog) => {
      return this.state.banishedHogs.indexOf(hog) === -1;
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filters
          showGreased={this.state.showGreased}
          handleToggleGreased={this.handleToggleGreased}
          handleSortHogs={this.handleSortHogs}
        />
        <HogList
          hogs={this.filterBanished()}
          handleBanishHog={this.handleBanishHog}
        />
      </div>
    );
  }
}

export default App;
