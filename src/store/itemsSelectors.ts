import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export const selectItems = (state: RootState) => state.items.items;
export const selectSearchQuery = (state: RootState) => state.items.searchQuery;

export const selectItemsCount = createSelector(
  [selectItems],
  (items) => items.length
);

export const selectFilteredItems = createSelector(
  [selectItems, selectSearchQuery],
  (items, searchQuery) => {
    if (!searchQuery.trim()) {
      return items;
    }

    const lowerQuery = searchQuery.toLowerCase().trim();

    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.subtitle.toLowerCase().includes(lowerQuery)
    );
  }
);

export const selectIsSearching = createSelector(
  [selectSearchQuery],
  (searchQuery) => searchQuery.trim().length > 0
);
