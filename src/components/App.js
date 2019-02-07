import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Recipe from './Recipe';

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
              <Switch>
                  <Route 
                    component={Recipe} 
                    exact path="/recipe/:recipeId"
                  />
                  <Route 
                    component={Home} 
                    exact path="/"
                  />
              </Switch>
            </Fragment>
          </BrowserRouter>
    );
  }
}
export default App;

