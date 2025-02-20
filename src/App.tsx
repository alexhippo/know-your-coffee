import { useState } from 'react';
import './App.css'
import data from './assets/data.json'
import Cup from './components/Cup';


function App() {
  const [coffee, setCoffee] = useState<string>('');
  const [recipe, setRecipe] = useState<string>('');

  const handleButtonClick = (coffee: string, recipe: string) => {
    setCoffee(coffee);
    setRecipe(recipe);
  }

  return (
    <>
      <h1>Know Your Coffee</h1>
      <div>
        {Object.entries(data).map(([key, value]) => {
          return <button key={key} onClick={() => handleButtonClick(key, value.recipe)}>{key}</button>
        })}
      </div>
      <Cup coffee={coffee} />
      <div>
        {recipe}
      </div>
    </>
  )
}

export default App
