import React from "react";
import RecipeIngredientEdit from "./recipeIngredientEdit";

///the &times; is the x button

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div>
        <button>&times;</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name" />

        <label htmlFor="cookTime">Cook Time</label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          placeholder="Cook Time"
        />

        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          placeholder="Servings"
        />

        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          id="instructions"
          placeholder="Instructions"
        />
      </div>
      <br />
      <label>Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit />
        <RecipeIngredientEdit />
      </div>
      <div>
        <button>Add Ingredient</button>
      </div>
    </div>
  );
}
