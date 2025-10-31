import { useState } from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import type { Item } from "./types/item.types";
import Button from "./components/Button";
import AddFormItem from "./components/AddFormItem";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Item | null>(null);

  return (
    <div className="w-full">
      <Header />
      <SearchBar />
      <ItemList
        onEdit={(item) => {
          setEditing(item);
          setOpen(true);
        }}
      />
      {open && (
        <AddFormItem
          onClose={() => setOpen(false)}
          initialData={editing ?? undefined}
        />
      )}
      <Button
        onClick={() => {
          setEditing(null);
          setOpen(true);
        }}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add Item
      </Button>
    </div>
  );
}

export default App;
