import React from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];
export default function PackingList({
  itemsArray,
  onDeleteItem,
  onToggleItem,
}) {
  return (
    <div className="packing-list">
      <ul>
        {itemsArray.map((item) => (
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
    </div>
  );
}
