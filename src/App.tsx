import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
import Cup from "./components/Cup";

function App() {
  const [coffee, setCoffee] = useState<string>("");
  const [recipe, setRecipe] = useState<string>("what would you like to order?");

  const handleButtonClick = (coffee: string, recipe: string) => {
    setCoffee(coffee);
    setRecipe(recipe);
  };

  return (
    <>
      <h1>Know Your Coffee</h1>
      <div className="buttonBar">
        {Object.entries(data).map(([key, value]) => {
          return (
            <button
              type="button"
              key={key}
              aria-pressed={coffee === key}
              className={coffee === key ? "active" : ""}
              onClick={() => handleButtonClick(key, value.recipe)}
            >
              {key}
            </button>
          );
        })}
      </div>
      <Cup coffee={coffee} />
      <div aria-live="polite">{recipe}</div>
    </>
  );
}

export default App;
