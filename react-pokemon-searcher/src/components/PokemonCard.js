import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    isFront: true,
  };

  toggleImage = () => {
    this.setState({ isFront: !this.state.isFront });
    // this.setState({ isFront: this.state.isFront ? false : true });
  };

  render() {
    // isFront Bool True ? show front : show back

    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggleImage}>
            <img
              alt="oh no!"
              src={
                this.state.isFront
                  ? this.props.pokemon.sprites.front
                  : this.props.pokemon.sprites.back
              }
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
