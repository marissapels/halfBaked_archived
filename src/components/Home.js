import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from './library/Card';
import recipes from '../db/recipes';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          {
            recipes.map(recipe => {
              return (
                <div  key={recipe.name} className="col-xs-4 text-center">
                  <Link to={`/recipe/${recipe.id}`}>
                    <Card recipe={recipe} />
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Home;