import ItemCard from "./ItemCard";
import { useAppSelector } from "../store/hooks";
import {
  selectFilteredItems,
  selectIsSearching,
} from "../store/itemsSelectors";

function ItemList() {
  const items = useAppSelector(selectFilteredItems);
  const isSearching = useAppSelector(selectIsSearching);

  if (items.length === 0) {
    return (
      <div className="pt-12 min-h-dvh bg-blue-300 text-center text-gray-700">
        <h3 className="max-w-md mx-auto bg-blue-200 rounded-xl shadow-md border border-gray-100 p-5">
          {isSearching
            ? "No items found — try a different search query."
            : "No items yet — click Add Item to add one."}
        </h3>
      </div>
    );
  }

  return (
    <section className="min-h-dvh bg-blue-300 flex flex-col gap-4 px-5 py-10 md:px-20 ">
      {items.map((i) => (
        <ItemCard key={i.id} item={i} />
      ))}
    </section>
  );
}

export default ItemList;
