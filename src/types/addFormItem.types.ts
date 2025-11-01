import type { Item } from "./item.types";

export interface AddFormItemProps {
  itemToEdit?: Item | undefined;
  onCloseModal: () => void;
}

export interface FormComponentProps {
  children: React.ReactNode;
  className?: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}
