import React, { useContext } from "react";
import { CartContext } from "../../providers/cartContext";

import { CartCard } from "../CartCard";

export const CartFull = () => {
  const { cartProducts } = useContext(CartContext);

  return (
    <div>
      <div>
        <div>
          <h2>Carrinho de compras</h2>
        </div>
        {cartProducts.length === 0 ? (
          <div>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        ) : (
          <>
            <div>
              {cartProducts.map((product) => {
                return (
                  <CartCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    img={product.img}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
