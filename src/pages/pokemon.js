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

    return (
      <div className="ta-center">
        <h2>{pokemon.Name}</h2>
        <div className="grid">
          <div>
            <h4>#{pokemon.Number}</h4>
            <p>
              <span className={`pkspr pkmn-${pokemon.Name.toLowerCase()}`}></span>
            </p>
            <p>
              {pokemon.Types.map((type, key) => (
                <TypeLink type={type} key={key} />
              ))}
            </p>
          </div>
          <div className="ta-left">
            <h4>Information</h4>
            <p>
              Classification: {pokemon.Classification}<br />
              Height: {pokemon.Height}<br />
              Weight: {pokemon.Weight}
            </p>
          </div>
        </div>
        <TypeMatchup types={pokemon.Types} />
      </div>
    )
  }
}
