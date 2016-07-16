import React from 'react';
import { IndexLink, Link } from 'react-router';
import TypeMatchup from '../components/type-matchup';
import ALL_POKEMON from '../data/pokemon';

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: {}
    };
  }

  componentWillMount() {
    let params = this.props.params;
    let pokemon = ALL_POKEMON.find((value, index) => {
      return params.pokemon === value.Name.toLowerCase()
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
      <div>
        <h2>{pokemon.Name}</h2>
        <span className={`pkspr pkmn-${name.toLowerCase()}`}></span>
        <span className="classification">#{number}: {name}</span>

        {types.map((type, key) => (
          <span className={type.toLowerCase()} key={key}>{type}</span>
        ))}

        <TypeMatchup types={types} />
      </div>
    )
  }
}
