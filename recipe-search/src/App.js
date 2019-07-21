import React, { useEffect, useState } from 'react';
import './App.css';
import MultipleSelect from './components/MultiSearch/MultipleSelect'
import Recipe from './components/Results/Recipe'

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

useEffect(() => {
  chooseIngredients();
}, [query])

const chooseIngredients = async () => {
  const response = await fetch(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${query}&p=10`);
  const data = await response.json();
  setRecipes(data.results);
}
const updateSearch = e => {
  setSearch(e.target.value)
};
const getSearch = e => {
  e.preventDefault();
  setQuery(search)
}
const getSelect = ingredients => {
  setQuery(ingredients)
}

return (
    <div className="App">
      <div className="header">
        <h1 className="header__title">Recipes by <span>Ingredients</span></h1>
        <h2>Find recipes based on ingredients that you have on hand</h2>
        <div className="header__search">
          <form className="search-form" onSubmit={getSearch}>
            <input className="search-input" type="text" value={search} onChange={updateSearch}/>
            <button className="search-button">GO</button>
          </form>
        </div>
      <MultipleSelect getSelect={getSelect}/>
      </div>
      <div className="result">
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.href}
          image={recipe.thumbnail}
          ingredients={recipe.ingredients}
          title={recipe.title}
          link={recipe.href}
        />
      ))}
      </div>
      <div className="footer">
        <h1>Enjoy your meal!</h1>
      </div>
    </div>
  );
}

export default App;