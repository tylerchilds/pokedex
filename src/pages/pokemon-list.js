import React from 'react';
import PokemonLink from '../components/pokemon-link';
import ALL_POKEMON from '../data/pokemon';

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
