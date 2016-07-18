import React from 'react';
import TypeList from '../components/type-list';
import PokemonLink from '../components/pokemon-link';
import ALL_POKEMON from '../data/pokemon';

export default class PokemonList extends React.Component {
  componentDidMount(){
    PkSpr.process_dom()
  }

  render() {
    return (
      <div>
        <div className="wrapper-small">
          <TypeList />
        </div>
        {ALL_POKEMON.map((pokemon, key) => (
          <PokemonLink pokemon={pokemon} key={key} />
        ))}
      </div>
    );
  }

}
