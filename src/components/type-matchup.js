import React from 'react';
import TypeLink from '../components/type-link';
import TypeSanitizer from '../services/type-sanitizer';

export default class TypeMatchup extends React.Component{
  constructor(props){
    super();

    this.state = { matchups: TypeSanitizer.filterMatchup(props.types) };
  }

  componentWillReceiveProps(props) {
    this.setState({
      matchups: TypeSanitizer.filterMatchup(props.types)
    });
  }

  render(){
    return (
      <div className="grid">
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
