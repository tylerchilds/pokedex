import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div className="ta-center">
        <h1><Link to="/">Pokédex</Link></h1>
        {this.props.children}
      </div>
    );
  }

}

export default App;
