import Button from "./Button";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import type {
  ModalContextType,
  ModalOpen,
  ModalProps,
} from "../types/modal.types";
import useOutsideClick from "../hooks/useOutsideClick";
import { cloneElement, createContext, useContext, useState } from "react";

const ModalContext = createContext<ModalContextType | null>(null);

function Modal({ children }: { children: React.ReactNode }) {
  const [opneName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ close, open, opneName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }: ModalOpen) {
  const { open } = useContext(ModalContext) as ModalContextType;

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }: ModalProps) {
  const { opneName, close } = useContext(ModalContext) as ModalContextType;
  const ref = useOutsideClick(close);

  if (name !== opneName) return null;

  return createPortal(
    <div className="fixed inset-0 w-full h-screen bg-black/50 backdrop-blur-sm z-1000 transition-all duration-500">
      <div
        ref={ref}
        className="fixed w-[80vw] max-h-[80vh] overflow-y-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl transition-all duration-200 p-6 sm:p-8"
      >
        <Button
          onClick={() => close()}
          className="absolute top-3 right-5 bg-transparent border-none p-1 rounded-sm translate-x-2 transition-all duration-200 hover:bg-gray-100"
        >
          <HiXMark className="w-6 h-6 text-gray-500" />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
