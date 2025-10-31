import type { Item } from "./item.types";

export interface ItemCardProps {
  item: Item;
  onEdit: (item: Item) => void;
}
