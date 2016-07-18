import React from 'react';
import PokemonLink from '../components/pokemon-link';
import ALL_POKEMON from '../data/pokemon';

export default class TypePokemon extends React.Component{
  constructor(props){
    super();

    this.state = { pokemon: this._getPokemon(props.type) }
  }

  componentDidMount(){
    PkSpr.process_dom()
  }

  componentDidUpdate(){
    for(let p of document.querySelectorAll('.pkspr')){
      p.innerHTML = '';
    }
    PkSpr.process_dom()
  }

  componentWillReceiveProps(props) {
    this.setState({
      pokemon: this._getPokemon(props.type),
    });
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

  _getPokemon(t){
    let type = t.charAt(0).toUpperCase() + t.slice(1);

    return ALL_POKEMON.filter((pokemon) =>{
      return pokemon.Types.indexOf(type) > -1;
    })
  }
}
