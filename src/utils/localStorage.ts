import type { Item } from "../types/item.types";

const KEY = "list-items";

export const saveToLocalStorage = (items: Item[]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Error saving to local storage:", error);
  }
};

export const loadFromLocalStorage = (): Item[] | null => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Item[]) : null;
  } catch (error) {
    console.error("Error loading from local storage:", error);
    return null;
  }
};
