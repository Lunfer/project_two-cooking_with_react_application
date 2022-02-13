import React from "react";
import Recipe from "./recipe";

export default function RecipeList(props) {
  const { recipes, handleRecipeAdd, handleRecipeDelete } = props;
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              handleRecipeDelete={handleRecipeDelete}
              {...recipe}
            />
          );
        })}
      </div>
      <div className="recipe-list_add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add recipe
        </button>
      </div>
    </div>
  );
}
