import { createContext, useState } from "react";

export const ModalContext = createContext({
  isCartOpen: false,
  closeCart: () => {},
  openCart: () => {},
});

const ModalProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const closeCart = () => {
    setIsCartOpen(false);
  };
  const openCart = () => {
    setIsCartOpen(true);
  };
  const modalCtx = {
    isCartOpen,
    closeCart,
    openCart,
  };
  return <ModalContext.Provider value={modalCtx}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
