import React, { useContext } from "react";
import { CartContext } from "../../providers/cartContext";
import { iListProduct } from "../../providers/mainListContext";
export const MainListCard = ({
  id,
  name,
  category,
  price,
  img,
}: iListProduct) => {
  const { addItemToCart } = useContext(CartContext);
  return (
    <li id={id + ""}>
      <img src={img} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{category}</p>
        <span>R$ {price.toFixed(2)}</span>
        <button onClick={() => addItemToCart(id)}>Adicionar</button>
      </div>
    </li>
  );
};
