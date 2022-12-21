import React, { useContext } from "react";
import { CartContext } from "../../providers/cartContext";
import { iListProduct } from "../../providers/mainListContext/types";
import { Button } from "../Button";
import { StyledCard } from "./style";

export const MainListCard = ({
  id,
  name,
  category,
  price,
  img,
}: iListProduct) => {
  const { addItemToCart } = useContext(CartContext);
  return (
    <StyledCard id={id + ""}>
      <img src={img} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{category}</p>
        <span>R$ {price.toFixed(2)}</span>
        <Button
          type="button"
          buttonVariation="add"
          onClick={() => addItemToCart(id)}
        >
          Adicionar
        </Button>
      </div>
    </StyledCard>
  );
};
