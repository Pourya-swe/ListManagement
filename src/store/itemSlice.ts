import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Item, ItemFormData } from "../types/item.types";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";

interface itemState {
  items: Item[];
  searchQuery: string;
}

const initialState: itemState = {
  items: loadFromLocalStorage() ?? [],
  searchQuery: "",
};

const slice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ItemFormData>) {
      const newItem: Item = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        ...action.payload,
      };
      state.items.unshift(newItem);
      saveToLocalStorage(state.items);
    },
    updateItem(
      state,
      action: PayloadAction<{ id: string; changes: Partial<Item> }>
    ) {
      const idx = state.items.findIndex((i) => i.id === action.payload.id);
      if (idx !== -1) {
        state.items[idx] = { ...state.items[idx], ...action.payload.changes };
        saveToLocalStorage(state.items);
      }
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      saveToLocalStorage(state.items);
    },
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
      saveToLocalStorage(state.items);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    clearSearch: (state) => {
      state.searchQuery = "";
    },
  },
});

export const {
  addItem,
  updateItem,
  deleteItem,
  setItems,
  setSearchQuery,
  clearSearch,
} = slice.actions;
export default slice.reducer;
