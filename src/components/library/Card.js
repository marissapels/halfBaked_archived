import React, { Component } from 'react';

function Card(props){
  let recipe=props.recipe;
  console.log(recipe);
  return (
    <div className="card">
      <img src={recipe.image} className="recipeImage" alt={`image of ${recipe.name}`}/>
      <div className="recipeWords">
        <h3 className="recipeName">{recipe.name}</h3>
        <h4 className="recipeDescription">{recipe.description}</h4>
      </div>
    </div>
  );
}

export default Card;