"use client";

import { useState, createContext, useContext } from "react";
import ContactModal from "./ContactModal";

type ModalCtx = { openModal: () => void };
export const ContactModalContext = createContext<ModalCtx>({ openModal: () => {} });
export const useContactModal = () => useContext(ContactModalContext);

export default function HomeClient({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContactModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ContactModalContext.Provider>
  );
}
