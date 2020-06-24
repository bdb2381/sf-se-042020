import React from "react";

import Pet from "./Pet";

const PetBrowser = ({ pets, onAdoptPet }) => (
  <div className="ui cards">
    {pets.map((pet) => (
      <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
    ))}
  </div>
);

export default PetBrowser;

// class PetBrowser extends React.Component {
//   renderPets = () => {
//     return this.props.pets.map((pet) => (
//       <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />
//     ));
//   };

//   render() {
//     return (
//       <div className="ui cards">
//         {this.renderPets()}

//         {/* {this.props.pets.map((pet) => (
//           <Pet />
//         ))} */}
//       </div>
//     );
//   }
// }

// export default PetBrowser;
