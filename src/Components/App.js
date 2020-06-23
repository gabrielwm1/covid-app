import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import SymptomsForm from './SymptomsForm';
class App extends Component {
  constructor(props) {
    super(props);
  }

  onSendSubmit(data) {
    console.log(data);
  }

  render() {
    return (
      <BrowserRouter>
        <Route path={'/login'} component={Login} />
        <Route
          path={'/form'}
          render={onSubmit => (
            <SymptomsForm {...this.props} onSubmit={this.onSendSubmit} />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
