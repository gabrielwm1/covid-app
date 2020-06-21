import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import SymptomsForm from './SymptomsForm';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Route path={'/login'} component={Login} />
        <Route path={'/form'} component={SymptomsForm} />
      </BrowserRouter>
    );
  }
}

export default App;
