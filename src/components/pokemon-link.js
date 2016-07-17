import React from 'react';
import { Link } from 'react-router';

export default class PokemonLink extends React.Component {
  render() {
    const pokemon = this.props.pokemon
    const name = pokemon.Name
    const number = pokemon.Number
    const types = pokemon.Types

    return (
      <Link to={`/pokemon/${name.toLowerCase()}`}>
        <span className={`pkspr pkmn-${name.toLowerCase()}`}></span>
        <span className="classification">#{number}: {name}</span>

        {types.map((type, key) => (
          <span className={type.toLowerCase()} key={key}>{type}</span>
        ))}
      </Link>
    );
  }
}
