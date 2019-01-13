import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    return (
          <BrowserRouter>
            <Fragment>
            <Header/>
                <Route 
                  component={Home} 
                />
            </Fragment>
          </BrowserRouter>
    );
  }
}
export default App;

