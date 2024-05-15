import { recipes } from "./data/data";
import "./App.css";

function App() {
  const listRecepies = recipes.map((recipe) => (
    <div key={recipe.id}>
      <h1>{recipe.name}</h1>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Recipes</h1>
      {listRecepies}
    </div>
  );
}

export default App;
