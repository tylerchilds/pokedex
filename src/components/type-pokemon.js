import React from 'react';
import TypeLink from '../components/type-link';

export default class TypePokemon extends React.Component{
  render(){
    let matchups = TypeSanitizer.filterMatchup(this.props.types);

    return (
      <div>
        { this._processConditions(matchups.strengths, "Strengths") }
        { this._processConditions(matchups.weaknesses, "Weaknesses") }
        { this._processConditions(matchups.immunes, "Immunes") }
      </div>
    )
  }

  _processConditions(types, title){
    if(types.length === 0) return;

    return (
      <div>
        <h4>{title}</h4>
        {types.map((type, key) => (
          <TypeLink type={type} key={key} />
        ))}
      </div>
    )
  }
}
