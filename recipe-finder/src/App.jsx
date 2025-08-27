import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipe] = useState([]);
  const [error, setError] = useState("");

  const fetchRecipe = async () => {
    if (!query) return;
    setError("");
    try {
      const res =
        await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}
      `);
      const data = await res.json();
      if (data.meals) {
        setRecipe(data.meals);
        console.log(data.meals);
      } else {
        setRecipe([]);
        setError("No recipe found");
      }
    } catch (err) {
      setError("Something went wrong.Try again.");
    }
  };

  return (
    <div className="container">
      <h1>Recipe Finder</h1>
      <p>Find meals for your ingredient.</p>
      <div className="input">
        <input
          type="text"
          placeholder="Search your ingredients"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchRecipe}>Search</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div className="output">
        <h3>Your Search Result</h3>
        <div className="ans">
          {recipes.map((recipe) => (
            <div className="mainAns" key={recipe.idMeal}>
              <h3>{recipe.strMeal}</h3>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="recipe-img"
              />
              <h5>{recipe.strCategory}</h5>
              <p>{recipe.strInstructions}</p>
              {recipe.strSource ? (
                <a
                  href={recipe.strSource}
                  target="_blank"
                  rel="noreferrer"
                  className="recipe-link"
                >
                  View Full Recipe
                </a>
              ) : (
                <p className="no-source">No source available</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="choices">
        <h2>Popular Ingredients</h2>
        <button
          onClick={() => {
            setQuery("egg");
            fetchRecipe();
          }}
        >
          Egg
        </button>
        <button
          onClick={() => {
            setQuery("greek yogurt");
            fetchRecipe();
          }}
        >
          greek yogurt
        </button>
        <button
          onClick={() => {
            setQuery("cream cheese");
            fetchRecipe();
          }}
        >
          cream cheese
        </button>
        <button
          onClick={() => {
            setQuery("Wheat");
            fetchRecipe();
          }}
        >
          Wheat
        </button>
        <button
          onClick={() => {
            setQuery("bread");
            fetchRecipe();
          }}
        >
          bread
        </button>
        <button
          onClick={() => {
            setQuery("Milk");
            fetchRecipe();
          }}
        >
          Milk
        </button>
      </div>
      <div className="social">
        <a href="#">github</a>
        <a href="#">LinkedIn</a>
      </div>
    </div>
  );
}

export default App;
