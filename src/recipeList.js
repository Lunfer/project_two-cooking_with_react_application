import React from "react";
import Recipe from "./recipe";

export default function RecipeList({ recipes }) {
  return (
    <div>
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <button>Add recipe</button>
    </div>
  );
}
