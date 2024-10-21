import PackingList from "./PackingList";
import Logo from "./Logo";
import Form from "./Form";
import Status from "./Status";
import "../index.css";
import { useState } from "react";

export default function App() {
  const [items, setItem] = useState([]);

  // Add Item to packing list
  function handleAddItem(newItem) {
    setItem((items) => [...items, newItem]);
  }

  // Delete Item from packing list
  function handleRemoveItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  // Toggle Packed Status of a packing item
  function handleTogglePacked(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Delete Entire packing item List
  function handleClearItemList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete entire list?"
    );

    if (confirmed) setItem(() => []);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        onClearList={handleClearItemList}
        onPackedToggle={handleTogglePacked}
        items={items}
        onRemoveItem={handleRemoveItem}
      />
      <Status items={items} />
    </div>
  );
}
