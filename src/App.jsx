import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ShoppingList from "./Components/ShoppingList";

function App() {
  const [shoppingList, setShoppingList] = useState([
    { id: 1, item: "bread", quantity: 1 },
    { id: 2, item: "milk", quantity: 2 },
  ]);

  return (
    <div id="shopping-list-wrapper">
      <Header />
      <ShoppingList shoppingList={shoppingList} setShoppingList={setShoppingList} />
    </div>
  );
}

export default App;
