import React, { useState, useEffect } from "react";
import RecipeList from "./recipeList";
import "../css/app.css";
import uuidv4 from "uuid/v4";
import RecipeEdit from "./recipeEdit";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const recipeContextValue = { handleRecipeAdd, handleRecipeDelete };

  ///the order of the useEffect hooks matters!
  ///also, the next hook is checking to see if there were recipes in the storages
  ///and if there are then they are being parsed into an array and into the setRecipes function.
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instruc.",
      ingredients: [{ id: uuidv4(), name: "Name", amount: "1 Tbs" }],
    };
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <div>
      <RecipeContext.Provider value={recipeContextValue}>
        <RecipeList recipes={recipes} />
        <RecipeEdit />
      </RecipeContext.Provider>
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
