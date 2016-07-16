import React from 'react';
import { IndexLink, Link } from 'react-router';
import ALL_POKEMON from '../data/pokemon';

class PokemonLink extends React.Component {
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

export default class PokemonList extends React.Component {
  componentDidMount(){
    PkSpr.process_dom()
  }

  render() {
    return (
      <div>
        {ALL_POKEMON.map((pokemon, key) => (
          <PokemonLink pokemon={pokemon} key={key} />
        ))}
      </div>
    );
  }

}
