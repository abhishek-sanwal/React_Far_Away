import { createContext, useContext, useReducer } from "react";

const ItemsContext = createContext();
const initialState = {
  items: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      console.log("add", action.payload);

      return { ...state, items: [...state.items, action.payload] };
    }

    case "remove": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }

    case "toggle": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, packed: !item.packed } : item
        ),
      };
    }
    case "clear": {
      return initialState;
    }

    default: {
      throw new Error("Invalid Action!!!");
    }
  }
}

function ItemProvider({ children }) {
  const [{ items }, dispatch] = useReducer(reducer, initialState);

  <ItemsContext.Provider
    value={{
      items,
      handleAddItem: (newItem) => dispatch({ type: "add", payload: newItem }),
      handleRemoveItem: (id) => dispatch({ type: "remove", payload: id }),
      handleClearItemList: () => {
        const confirmed = window.confirm(
          " Are you sure you want to delete entire list?"
        );
        if (confirmed) dispatch({ type: "clear" });
      },
      handleTogglePacked: (id) => dispatch({ type: "toggle", payload: id }),
    }}
  ></ItemsContext.Provider>;
}

function useItems() {
  const context = useContext(ItemsContext);
  if (context === undefined)
    throw new Error("Items Context called in parent elements outside children");
  return context;
}

export { ItemProvider, useItems };
