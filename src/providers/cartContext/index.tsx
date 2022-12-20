import React, { useContext, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
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
  addCounter: (id: number) => void;
  subtractCounter: (id: number) => void;
  productCounter: number;
}

export const CartContext = createContext({} as iCartContextValue);

export const CartProvider = ({ children }: iCartContextProps) => {
  const { mainProductsList } = useContext(MainListContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([] as iListProduct[]);
  const [productCounter, setProductCounter] = useState(1);

  const addItemToCart = (id: number) => {
    const getItem = mainProductsList.find((product) => product.id === id);
    const verifyArr = cartProducts.some((product) => product.id === id);
    if (verifyArr) {
      toast.warning("Você já adicionou este produto ao carrinho");
    } else {
      if (getItem) {
        toast.success("Produto adicionado ao carrinho com sucesso");
        setCartProducts(() => [...cartProducts, getItem]);
      }
    }
  };

  const removeItemFromCart = (id: number) => {
    const findProduct = cartProducts.find((product) => product.id === id);
    if (findProduct) {
      findProduct.counter = 1;
    }

    const filterList = cartProducts.filter((product) => product.id !== id);
    if (filterList) {
      setCartProducts(() => [...filterList]);
    }
    toast.success("Produto removido com sucesso");
  };

  const getTotalPrice = (): string => {
    const getTotalSum = cartProducts.map(
      (product) => product.counter * product.price
    );

    const total = getTotalSum.reduce(
      (acc, currentValue) => acc + currentValue,
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
    cartProducts.map((product) => (product.counter = 1));
    setCartProducts([]);
    toast.success("Produtos removidos com sucesso");
  };

  const addCounter = (id: number) => {
    setProductCounter(productCounter + 1);
    const verifyArr = cartProducts.find((product) => product.id === id);
    if (verifyArr) {
      verifyArr.counter = verifyArr.counter + 1;
    }
  };

  const subtractCounter = (id: number) => {
    const verifyArr = cartProducts.find((product) => product.id === id);

    if (verifyArr) {
      if (verifyArr.counter > 1) {
        setProductCounter(productCounter - 1);
        verifyArr.counter = verifyArr.counter - 1;
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        productCounter,
        cartProducts,
        addItemToCart,
        removeItemFromCart,
        getTotalPrice,
        isCartOpen,
        openCart,
        closeCart,
        clearCart,
        addCounter,
        subtractCounter,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
