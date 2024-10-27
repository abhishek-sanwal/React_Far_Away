import "../index.css";

import Form from "./Form";
import { ItemProvider } from "./ItemContext";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Status from "./Status";

export default function App() {
  return (
    <div className="app">
      <ItemProvider>
        <Logo />
        <Form />
        <PackingList />
        <Status />
      </ItemProvider>
    </div>
  );
}
