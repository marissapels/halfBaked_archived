import React, { Component } from 'react';
import Card from './library/Card';
import recipes from '../db/recipes';

class Recipe extends Component {
  constructor(props) {
    super(props);
    let recipeId = this.props.match.params.recipeId;
    let setRecipe = recipes.find(recipe=> recipe.id === recipeId);
    this.state = {
      recipe: setRecipe
    }
  }

  render() {
    return(
      <div className="container">
        <h2 className="recipeName">{this.state.recipe.name}</h2>
        <div className="description">{this.state.recipe.description}</div>
        <div className="row">
          <div className="col-xs-6">
            <h3 className="heading">What you'll need:</h3>
            <ul className="ingredients">
              {this.state.recipe.ingredients.map(ingredient => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="col-xs-6">
            <h3 className="heading">How to make it:</h3>
            <ul className="directions">
              {this.state.recipe.directions.map(step => (
                <li>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Recipe;