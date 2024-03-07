import React from "react";

export default function Stats({ itemsArray }) {
  function PackedItems() {
    let packedItems = itemsArray.filter((item) => item.packed === true);
    return `Packed ${packedItems.length}`;
  }
  function PackedItemsPercentage() {
    if (itemsArray.length > 0) {
      let packedItems = itemsArray.filter((item) => item.packed === true);
      let totalItems = itemsArray.length;
      let percentage = (packedItems.length / totalItems) * 100;
      return `${percentage.toFixed()}`;
    } else {
      return "0%";
    }
  }
  return (
    <div className="stats-container">
      {itemsArray.length === 0 ? (
        <p>Start Adding required items to your packing list 🧳</p>
      ) : PackedItemsPercentage() === "100" ? (
        <p>Everything done. Ready to go ✈️</p>
      ) : (
        <p>
          💼 You have {itemsArray.length} items on the list and you have Packed
          {PackedItems()} ({PackedItemsPercentage()}%)
        </p>
      )}
    </div>
  );
}
