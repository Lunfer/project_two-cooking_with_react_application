import React from "react";
import RecipeList from "./recipeList";

function App() {
  return (
    <div>
      <RecipeList recipes={sampleRecipes}/>
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1.45",
    instructions: "1.Put Salt on chicken\n2.Put chicken in oven\n3.Eat Chicken",
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0.45",
    instructions: "1.Put paprika on pork\n2.Put chicken in oven\n3.Eat pork",
  },
];

export default App;
