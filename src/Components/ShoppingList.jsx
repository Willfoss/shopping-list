import { useState } from "react";
import AddToList from "./AddToList";

function ShoppingList(props) {
  const { shoppingList, setShoppingList } = props;

  const [checkboxTicked, setCheckBoxTicked] = useState(false);
  const [crossItemOff, setCrossItemOff] = useState("");

  function handleListCheckBoxChange(event) {
    console.dir(event.target);
    console.log(event.target.parentNode.nextSibling.classList.add("strike-through"));
    setCheckBoxTicked(event.target.checked);
    if (checkboxTicked === false) {
      event.target.parentNode.nextSibling.classList.add("strike-through");
      event.target.parentNode.nextSibling.nextSibling.classList.add("strike-through");
    }
    if (checkboxTicked === true) {
      event.target.parentNode.nextSibling.classList.remove("strike-through");
      event.target.parentNode.nextSibling.nextSibling.classList.remove("strike-through");
    }
  }

  return (
    <div id="shopping-items-wrapper">
      <ol id="shopping-ordered-list">
        <div id="shopping-item-wrapper" key="lh-shopping-item-wrapper">
          <p className="list-label list-heading">List No.</p>
          <li className="list-item list-heading">Item Name</li>
          <p className="list-quantity list-heading">Quantity</p>
        </div>
        {shoppingList.map((item) => {
          return (
            <div id="shopping-item-wrapper" key={`${item.id}-wrapper`}>
              <label className="list-label" key={`${item.id}-label`}>
                {item.id}
                <input id={item.id} className="list-checkbox" type="checkbox" onChange={handleListCheckBoxChange}></input>
              </label>

              <li id="1" className={`list-item `} key={`${item.id}`}>
                {item.item}
              </li>
              <p className={`list-quantity `} key={`${item.id}${item.quantity}`}>
                {item.quantity}
              </p>
            </div>
          );
        })}
      </ol>
      <AddToList shoppingList={shoppingList} setShoppingList={setShoppingList} />
    </div>
  );
}

export default ShoppingList;
