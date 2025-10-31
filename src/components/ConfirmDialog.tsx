import type { ConfirmDialogProps } from "../types/confirmDialog.types";
import Button from "./Button";

function ConfirmDialog({
  title,
  description,
  onCancel,
  onConfirm,
}: ConfirmDialogProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center modal-backdrop z-40">
      <div
        role="dialog"
        aria-modal="true"
        className="bg-white p-5 rounded shadow max-w-md w-full"
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        )}
        <div className="mt-4 flex justify-end gap-2">
          <Button
            variant="secondary"
            onClick={onCancel}
            className="px-3 py-1 border rounded"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="px-3 py-1 bg-red-600 text-white rounded"
            variant="danger"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
