export default function Item({ onPackedToggle, item, onRemoveItem }) {
  return (
    <li key={item.id}>
      {/* Checkbox to toggle packed or unpacked */}
      <input type="checkbox" onChange={() => onPackedToggle(item.id)} />

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
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
}
