import React from "react";
import Recipe from "./recipe";

export default function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list_add-recipe-btn-container">
        <button className="btn btn--primary">Add recipe</button>
      </div>
    </div>
  );
}
