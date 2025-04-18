import "./styles.css";
import { PiChefHat } from "react-icons/pi";
export default function App() {
  return (
    <>
      <div className="App">
        <img src={PiChefHat} />
        <h1>Chef Claude</h1>
      </div>
      <div className="add-ingredient">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingrdient"
        />
        <button className="main-button">+ Add Ingredient</button>
      </div>
      <h2>Ingredients on Hand:</h2>
    </>
  );
}
