import React, { useContext } from "react";
import { CartContext } from "../../providers/cartContext";
import { CartCard } from "../CartCard";
import { TotalValueCart } from "../TotalCartValue";
import {
  StyledCart,
  StyledCartHeader,
  StyledEmptyCart,
  StyledFullCart,
  StyledModalWrapper,
} from "./style";

export const CartFull = () => {
  const { cartProducts, closeCart, isClosing } = useContext(CartContext);

  return (
    <StyledModalWrapper>
      <StyledCart isClosing={isClosing}>
        <StyledCartHeader>
          <h2>Carrinho de compras</h2>
          <button onClick={() => closeCart()}>X</button>
        </StyledCartHeader>
        {cartProducts.length === 0 ? (
          <StyledEmptyCart>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </StyledEmptyCart>
        ) : (
          <>
            <StyledFullCart>
              {cartProducts.map((product) => {
                return (
                  <CartCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    img={product.img}
                    counter={product.counter}
                  />
                );
              })}
            </StyledFullCart>
            <TotalValueCart />
          </>
        )}
      </StyledCart>
    </StyledModalWrapper>
  );
};
