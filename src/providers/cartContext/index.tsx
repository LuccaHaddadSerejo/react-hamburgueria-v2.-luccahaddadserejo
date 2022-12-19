import React, { useContext, useState } from "react";
import { createContext } from "react";
import { iListProduct, MainListContext } from "../mainListContext";

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
}

export const CartContext = createContext({} as iCartContextValue);

export const CartProvider = ({ children }: iCartContextProps) => {
  const { mainProductsList } = useContext(MainListContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([] as iListProduct[]);

  const addItemToCart = (id: number) => {
    const getItem = mainProductsList.find((product) => product.id === id);
    const verifyArr = cartProducts.some((product) => product.id === id);
    if (verifyArr) {
      console.log("deu ruim");
    } else {
      if (getItem) {
        setCartProducts(() => [...cartProducts, getItem]);
      }
    }
  };

  const removeItemFromCart = (id: number) => {
    const filterList = cartProducts.filter((product) => product.id !== id);
    if (filterList) {
      setCartProducts(() => [...filterList]);
    }
  };

  const getTotalPrice = (): string => {
    const total = cartProducts.reduce(
      (acc, currentValue) => acc + currentValue.price,
      0
    );
    return total.toFixed(2);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addItemToCart,
        removeItemFromCart,
        getTotalPrice,
        isCartOpen,
        openCart,
        closeCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
