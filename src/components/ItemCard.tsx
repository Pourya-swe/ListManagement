import Button from "./Button";
import { useState } from "react";
import { deleteItem } from "../store/itemSlice";
import ConfirmDialog from "./ConfirmDialog";
import { useAppDispatch } from "../store/hooks";
import type { ItemCardProps } from "../types/itemCard.types";

function ItemCard({ item, onEdit }: ItemCardProps) {
  const dispatch = useAppDispatch();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
    setConfirmOpen(false);
  };

  return (
    <>
      <div className="flex flex-col bg-blue-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="flex flex-col gap-1 p-5">
          <h3 className="font-bold text-gray-900 text-ellipsis wrap-break-word line-clamp-2 text-[clamp(1.25rem,4vw,1.25rem)]">
            {item.title}
          </h3>
          <p className="text-gray-700 text-ellipsis wrap-break-word line-clamp-2 text-[clamp(1.25rem,4vw,1.25rem)]">
            {item.subtitle}
          </p>
          <p className="text-gray-500 text-[clamp(0.8rem,4vw,1rem)]">
            📅 Created: {new Date(item.createdAt).toLocaleString()}
          </p>
        </div>
        <div className="flex gap-2 justify-between">
          <Button
            onClick={() => setConfirmOpen(true)}
            className="w-full"
            variant="danger"
          >
            Delete
          </Button>
          <Button
            onClick={() => onEdit(item)}
            className="w-full"
            variant="secondary"
          >
            Edit
          </Button>
        </div>
      </div>
      {confirmOpen && (
        <ConfirmDialog
          title="Delete Item"
          description="Are you sure you want to delete this item? This action cannot be undone."
          onCancel={() => setConfirmOpen(false)}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
}

export default ItemCard;
