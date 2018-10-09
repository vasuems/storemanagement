import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Home from './containers/home';
import AdminDashboard from './containers/sideBar';
import { inherits } from 'util';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route 
          path="/dashboard"
          exact
          render={() => <Redirect to="/dashboard/#/home" />}
        />
        <Route path="/dashboard/#/home" exact component={AdminDashboard} />
      </div>
    </Router>
  );
};

export default App;
