import React from 'react';
import Card from './Card';

// First, we import the Card component, then we use the map function on filtered list obtained from the parent component in the render section. 
// Through this map function, we render a different Card for each person by passing on the parameters required.
// After this, in the return section we call the filtered object which was created earlier.


export default function SearchList ({ filteredRecipes })  {
  const filtered = filteredRecipes.map(recipe => <Card key={recipe.id} recipe={recipe} />) ; 
  if(filtered[0] == undefined){
    let searched = document.querySelector('.search-input').value      
    return <p1>No results found for “{searched}”. How about some burgers?</p1>
  }

  return (
    <div>       
        {filtered} 
        
         
    </div>
  );
};
