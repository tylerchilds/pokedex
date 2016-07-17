import React from 'react';
import TypeLink from '../components/type-link';
import TypeSanitizer from '../services/type-sanitizer';

export default class TypeMatchup extends React.Component{
  componentWillMount(){
    this.state = { matchups: TypeSanitizer.filterMatchup(this.props.types) };
  }

  render(){
    return (
      <div>
        { this._processEffects(this.state.matchups.strengths, "Strengths") }
        { this._processEffects(this.state.matchups.weaknesses, "Weaknesses") }
        { this._processEffects(this.state.matchups.immunes, "Immunes") }
      </div>
    )
  }

  _processEffects(types, title){
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
