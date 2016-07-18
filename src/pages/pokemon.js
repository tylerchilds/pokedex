import React from 'react';
import { IndexLink, Link } from 'react-router';
import TypeMatchup from '../components/type-matchup';
import TypeLink from '../components/type-link';
import PokemonLink from '../components/pokemon-link';
import ALL_POKEMON from '../data/pokemon';

export default class Pokemon extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemon: {}
    };
  }

  componentWillMount() {
    let params = this.props.params;
    let pokemon = ALL_POKEMON.find((value, index) => {
      return params.pokemon === value.Name
    });
    this.setState({pokemon})
  }

  componentDidMount(){
    PkSpr.process_dom()
  }

  render() {
    const pokemon = this.state.pokemon;
    const name = pokemon.Name
    const number = pokemon.Number
    const types = pokemon.Types

    return (
      <div className="ta-center">
        <h4>#{number}</h4>
        <div>
          <span className={`pkspr pkmn-${name.toLowerCase()}`}></span>
        </div>
        <h2>{name}</h2>
        <div>
          {types.map((type, key) => (
            <TypeLink type={type} key={key} />
          ))}
        </div>
        <TypeMatchup types={types} />
        <hr className="ta-left" />
      </div>
    )
  }
}
