import React from 'react';
import TypeLink from '../components/type-link';
import ALL_TYPES from '../data/types';

export default class TypeList extends React.Component {
  render() {
    return (
      <div>
        {ALL_TYPES.map((type, key) => (
          <TypeLink type={type} key={key} />
        ))}
      </div>
    );
  }
}
