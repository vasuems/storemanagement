import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Home from './containers/home';
import AdminDashboard from './containers/sideBar';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route 
          path="/dashboard"
          exact
          render={() => <Redirect to="/dashboard/#/home" />}
          component={AdminDashboard}
        />
        <Route path="/dashboard/#/home" exact component={AdminDashboard} />
      </div>
    </Router>
  );
};

export default App;
