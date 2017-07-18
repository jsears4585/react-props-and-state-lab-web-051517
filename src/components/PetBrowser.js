import React, {Component} from 'react'

import Pet from './Pet'

class PetBrowser extends Component {
  render() {
    let renderPets = this.props.pets.map(pet =>
      <Pet
        pet={pet}
        key={pet.id}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(pet.id)}
      />
    )

    return (
      <div className="ui cards">
        {renderPets}
      </div>
    )
  }
}

export default PetBrowser
