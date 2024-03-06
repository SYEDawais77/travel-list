import React from "react";
import { useState } from "react";

export default function UserInputForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const [quantityValue, setQuantityValue] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!itemText) return;
    const newItem = {
      id: Date.now(),
      description: itemText,
      quantity: quantityValue,
      packed: false,
    };
    onAddItem(newItem);
    console.log(newItem);
    setItemText("");
    setQuantityValue(1);
  }

  return (
    <div className="user-input">
      <form onSubmit={handleSubmit}>
        <span>What do you need for your 😍 trip?</span>
        <select
          className="drop-down"
          value={quantityValue}
          onChange={(e) => setQuantityValue(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (v, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item name"
          value={itemText}
          onChange={(e) => setItemText(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
