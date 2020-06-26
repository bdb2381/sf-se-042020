import React, { Component } from "react";

import HogDetails from "./HogDetails";

class HogTile extends Component {
  state = { showDetails: false };

  getImage = () => {
    const fileName = this.props.hog.name.split(" ").join("_").toLowerCase();
    let pigImage = require(`../../hog-imgs/${fileName}.jpg`);

    return pigImage;
  };

  handleShowDetailsClick = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    return (
      <div className="ui eight wide column">
        <h3>{this.props.hog.name}</h3>

        <div
          className="image"
          onClick={() => this.props.handleBanishHog(this.props.hog)}
        >
          <img src={this.getImage()} alt="" />
        </div>

        <div className="content">
          {this.state.showDetails && <HogDetails hog={this.props.hog} />}
          <button className="ui button" onClick={this.handleShowDetailsClick}>
            Show Details
          </button>
        </div>
      </div>
    );
  }
}

export default HogTile;
