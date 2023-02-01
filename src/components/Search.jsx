import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';


export default function Search({ details })  {
  const [searchField, setSearchField] = useState("");

  const filteredRecipes = details.filter(
    recipe => {
      return (
        recipe
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        recipe
        .ingredients
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        recipe
        .firstTag
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        recipe
        .secondTag
        .toLowerCase()
        .includes(searchField.toLowerCase()) 
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      // <Scroll>
      //   <SearchList filteredRecipes={filteredRecipes} />
      // </Scroll>

    <SearchList filteredRecipes={filteredRecipes} />
    );
  }

  return (
    <section className="recipes-container">
      <div className="cards-container-test">
        <div className="input-holder"> 
      <div className="icon"></div>
        <input 
          className="search-input"
          type = "search" 
          placeholder = "Search Recipe" 
          onChange = {handleChange}
        />
      </div>
      </div>
      {searchList()}

 
    </section>

// pa3 bb br3 grow b--none bg-lightest-blue ma3 

  );
};
