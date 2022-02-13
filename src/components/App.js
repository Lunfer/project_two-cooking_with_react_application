import React from "react";
import RecipeList from "./recipeList";
import "../css/app.css";

function App() {
  return (
    <div>
      <RecipeList recipes={sampleRecipes} />
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
    ingredients: [
      { id: 1, name: "Chicken ", amount: " 2 pounds" },
      { id: 2, name: "Salt ", amount: " 1 tbs" },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0.45",
    instructions: "1.Put paprika on pork\n2.Put chicken in oven\n3.Eat pork",
    ingredients: [
      { id: 1, name: "Pork ", amount: " 2 pounds" },
      { id: 2, name: "Paprika ", amount: " 2 Tbs" },
    ],
  },
];

export default App;
