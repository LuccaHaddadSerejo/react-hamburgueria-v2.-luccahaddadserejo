import { iListProduct } from "../mainListContext/types";

export interface iCartContextProps {
  children: React.ReactNode;
}

export interface iCartContextValue {
  cartProducts: iListProduct[];
  addItemToCart: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  getTotalPrice: () => string;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
  addCounter: (id: number) => void;
  subtractCounter: (id: number) => void;
  productCounter: number;
  isClosing: boolean;
}
