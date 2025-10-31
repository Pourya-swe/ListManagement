import { HiXMark } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setSearchQuery, clearSearch } from "../store/itemSlice";
import {
  selectSearchQuery,
  selectIsSearching,
  selectFilteredItems,
} from "../store/itemsSelectors";
import { SlMagnifier } from "react-icons/sl";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);
  const isSearching = useAppSelector(selectIsSearching);
  const items = useAppSelector(selectFilteredItems);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleClearSearch = () => {
    dispatch(clearSearch());
  };

  return (
    <div className="relative max-w-dvw px-5 py-10 sm:px-20 bg-blue-500 text-white">
      <div className="relative">
        <input
          type="text"
          disabled={items.length === 0}
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by title or subtitle..."
          className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg text-zinc-900"
        />

        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <SlMagnifier className="w-5 h-5" />
        </div>

        {isSearching && (
          <button
            onClick={handleClearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <HiXMark className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
