import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import routes from './routes';

ReactDOM.render(
    <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
      {routes}
    </Router>,
    document.getElementById('app')
);
