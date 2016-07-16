import React from 'react';
import TypeMatchup from '../components/type-matchup';
import ALL_TYPES from '../data/types';

export default class Type extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: {}
    };
  }

  componentWillMount() {
    let type = this.props.params.type;

    this.setState({type})
  }

  componentWillReceiveProps(props) {
    this.setState({
      type: props.params.type
    });
  }

  render() {
    const type = this.state.type;
    
    return (
      <div>
        <h2>{type}</h2>
        <TypeMatchup types={[type]} />
      </div>
    )
  }
}
