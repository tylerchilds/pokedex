import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokemon Types</h1>
        <Link to="/">All Types</Link>
        <Link to="/pokemon">All Pokemon</Link>
        {this.props.children}
      </div>
    );
  }

}

export default App;
