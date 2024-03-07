import { useState } from "react";
import React from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];
export default function PackingList({
  itemsArray,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) 
{
  const [sortBy, setSortBy] = useState("input");
  
  let sortedItems = itemsArray

  if(sortBy === "input") sortedItems = itemsArray

  if(sortBy === "description") sortedItems = itemsArray.slice().sort((a, b) => a.description.localeCompare(b.description))

  if(sortBy === "packed") sortedItems = itemsArray.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
  
  return (
    <div className="packing-list">
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              className="packing-list-item-checkbox"
              value={item.packed}
              onChange={() => {
                onToggleItem(item.id);
              }}
            />
            <span
              className="packing-item-span"
              style={{
                textDecoration: item.packed ? "line-through" : "",
              }}
            >
              {item.quantity} {item.description}
            </span>
            <button
              className="packing-item-button"
              onClick={() => onDeleteItem(item.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      {sortedItems.length > 0 ? <div className="action">
        <select value={sortBy}  onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY NAME</option>
          <option value="packed">SORT BY PACKED</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div> : null}
    </div>  
  );
}
