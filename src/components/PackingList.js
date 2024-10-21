import Item from "./Item";
import { useState } from "react";

export default function PackingList({
  onClearList,
  onPackedToggle,
  items,
  onRemoveItem,
}) {
  const [sortedBy, setSortedBy] = useState("input");

  let sortedItems;
  if (sortedBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortedBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  } else {
    sortedItems = items;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((element) => (
          <Item
            onPackedToggle={onPackedToggle}
            key={element.id}
            onRemoveItem={onRemoveItem}
            item={element}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input"> Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
