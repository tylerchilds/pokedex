import React from 'react';
import PokemonLink from '../components/pokemon-link';
import ALL_POKEMON from '../data/pokemon';

export default class TypePokemon extends React.Component{
  componentWillMount(){
    let type = this.props.type;
    type = type.charAt(0).toUpperCase() + type.slice(1);

    const pokemon = ALL_POKEMON.filter((pokemon) =>{
      return pokemon.Types.indexOf(type) > -1;
    })

    this.state = { pokemon, type }
  }

  componentDidMount(){
    PkSpr.process_dom()
  }

  render(){
    return (
      <div>
        {this.state.pokemon.map((pokemon, key) => (
          <PokemonLink pokemon={pokemon} key={key} />
        ))}
      </div>
    )
  }
}
