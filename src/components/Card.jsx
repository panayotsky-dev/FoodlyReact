import React from 'react';
// card img last class -  br-100 h3 w3 dib
export default function Card ({recipe})  {
 
  return (
    <div className="card">
      <img className="" alt={recipe.name} src={process.env.PUBLIC_URL + recipe.image} />
      <div>
        <h2>{recipe.name}</h2>
        {/* <h3>Ingredients: {recipe.ingredients}</h3>
        <p>How to make it: {recipe.instructions}</p> */}
        <div className="tag-holder">
        <div className="recipe-tag">{recipe.firstTag}</div> <div className="recipe-tag">{recipe.secondTag}</div>
        </div>
      </div>
    </div>
  );
};
 


 