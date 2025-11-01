export interface ModalProps {
  children: React.ReactElement<{ onCloseModal?: () => void }>;
  name: string;
}

export interface ModalContextType {
  close: () => void;
  open: (name: string) => void;
  opneName: string;
}

export interface ModalOpen {
  children: React.ReactElement<{ onClick?: () => void }>;
  opens: string;
}
