import Header from "./components/Header";
import ItemList from "./components/ItemList";
import { SearchBar } from "./components/SearchBar";
import AddItem from "./components/AddItem";

function App() {
  return (
    <div className="w-full">
      <Header />
      <SearchBar />
      <ItemList />
      <AddItem />
    </div>
  );
}

export default App;
