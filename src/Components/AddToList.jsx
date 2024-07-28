import { useState } from "react";

function AddToList(props) {
  const { shoppingList, setShoppingList } = props;
  const [itemToAdd, setItemToAdd] = useState("");
  const [quantityOfItem, setQuantityOfItem] = useState(1);
  const [unitsOfItem, setUnitsOfItem] = useState("");

  function handleAddItemChange(event) {
    setItemToAdd(event.target.value);
  }

  function handleItemQuantityChange(event) {
    setQuantityOfItem(event.target.value);
  }

  function handleItemUnitsChange(event) {
    setUnitsOfItem(event.target.value);
  }

  function handleAddItemClick(event) {
    event.preventDefault();
    const shoppingListCopy = [...shoppingList];
    shoppingListCopy.push({
      id: shoppingListCopy.length + 1,
      item: itemToAdd,
      quantity: quantityOfItem + " " + unitsOfItem,
    });
    setShoppingList(shoppingListCopy);
    setItemToAdd("");
    setQuantityOfItem(1);
    setUnitsOfItem("");
  }

  return (
    <div id="add-to-list-wrapper">
      <form>
        <label htmlFor="add-to-list">Add item to list</label>
        <input className="input1" type="text" name="add-to-list" onChange={handleAddItemChange} value={itemToAdd}></input>
        <div id="quantity-unit-wrapper">
          <div id="quantity-wrapper">
            <label htmlFor="quantity">Quantity</label>
            <input className="input1" type="number" name="quantity" min="1" onChange={handleItemQuantityChange} value={quantityOfItem}></input>
          </div>
          <div id="unit-wrapper">
            <label htmlFor="item-unit">Units</label>
            <select className="input2" name="item-unit" onChange={handleItemUnitsChange} value={unitsOfItem}>
              <option></option>
              <option value={"mL"}>mL</option>
              <option value={"L"}>Litres</option>
              <option value={"g"}> g</option>
              <option value={"kg"}>kg</option>
            </select>
          </div>
        </div>
        <button id="add-to-list-button" onClick={handleAddItemClick}>
          Add to List
        </button>
      </form>
    </div>
  );
}

export default AddToList;
