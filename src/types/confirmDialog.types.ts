export interface ConfirmDialogProps {
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}
