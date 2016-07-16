import React from 'react';
import { Link } from 'react-router';

export default class TypeLink extends React.Component {
  render() {
    const type = this.props.type.name || this.props.type;

    return (
      <Link to={`/type/${type.toLowerCase()}`} className={`${type.toLowerCase()}`}>{type}</Link>
    );
  }
}
