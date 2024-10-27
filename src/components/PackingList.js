import Item from "./Item";
import { useItems } from "../contexts/ItemContext";
import { useState } from "react";

export default function PackingList() {
  const { handleClearItemList, items } = useItems();
  const [sortedBy, setSortedBy] = useState("input");

  //................ Sorting Functionality .......................................//
  let sortedItems;
  if (sortedBy === "description") {
    sortedItems = items
      .slice()
      .sort((first, second) =>
        first.description.localeCompare(second.description)
      );
  } else if (sortedBy === "packed") {
    sortedItems = items
      .slice()
      .sort((first, second) => Number(first.packed) - Number(second.packed));
  } else {
    sortedItems = items;
  }

  //..............................................................................//

  return (
    <div className="list">
      {/* List all items */}
      <ul>
        {sortedItems.map((element, index) => {
          console.log(element.id, element.description);
          return <Item key={element.id} item={element} />;
        })}
      </ul>

      {/* Items Sort by and clear list feature */}
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input"> Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearItemList}>Clear List</button>
      </div>
      {/*  */}
    </div>
  );
}
