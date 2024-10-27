import { useItems } from "./ItemContext";
export default function Status() {
  const { items } = useItems();
  const total = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((totalPacked / total) * 100);

  return (
    <footer className="stats">
      {/* Footer Message conditionally rendered */}
      <em>
        {items.length === 0
          ? "Start adding some items to your packing list🚀🚀"
          : percentage === 100
          ? "You got everything! Ready to go ✈️✈️"
          : `💼💼You have ${total} items on your list, and you already packed
         ${totalPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
