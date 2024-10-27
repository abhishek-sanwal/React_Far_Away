import { useItems } from "./ItemContext";

export default function Item({ item }) {
  console.log(item.description, "Inside item");

  const { handleTogglePacked, handleRemoveItem } = useItems();

  return (
    <li key={item.id}>
      {/* Checkbox to toggle packed or unpacked */}
      <input type="checkbox" onChange={() => handleTogglePacked(item.id)} />

      {/* Span to mark item packed or not visually */}
      <span
        style={
          item.packed
            ? {
                textDecoration: "line-through",
              }
            : {}
        }
      >
        {item.description}
      </span>
      <button onClick={() => handleRemoveItem(item.id)}>❌</button>
    </li>
  );
}
