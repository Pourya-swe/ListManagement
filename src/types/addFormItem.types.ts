import type { Item } from "./item.types";

export interface AddFormItemProps {
  onClose: () => void;
  initialData?: Item;
}
