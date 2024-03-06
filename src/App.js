import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import UserInputForm from "./Components/UserInputForm";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <>
      <Logo />
      <UserInputForm onAddItem={handleAddItem} />
      <PackingList
        itemsArray={items}
        onDeleteItem={handleRemoveItem}
        onToggleItem={handleToggleItem}
      />
      <Stats  itemsArray={items} />
    </>
  );
}

export default App;
