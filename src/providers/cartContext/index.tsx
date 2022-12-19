import React, { useContext, useState } from "react";
import { createContext } from "react";
import { iListProduct, MainListContext } from "../mainListContext";
import { UserContext } from "../userContext";

export interface iCartContextProps {
  children: React.ReactNode;
}

export interface iCartContextValue {
  cartProducts: iListProduct[];
  addItemToCart: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  getTotalPrice: () => string;
}

export const CartContext = createContext({} as iCartContextValue);

export const CartProvider = ({ children }: iCartContextProps) => {
  const { setGlobalLoading } = useContext(UserContext);
  const { mainProductsList } = useContext(MainListContext);
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

  // const addToCount = (id: number) => {
  //   const getItem = cartProducts.find((product) => product.id === id);
  //   if (getItem) {
  //     if (getItem.counter) {
  //       setCounter(counter + 1);
  //     }
  //   }
  // };

  // const removeFromCount = (id: number) => {
  //   const getItem = cartProducts.find((product) => product.id === id);
  //   if (getItem) {
  //     if (getItem.counter) {
  //       setCounter(counter - 1);
  //     }
  //   }
  // };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addItemToCart,
        removeItemFromCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
