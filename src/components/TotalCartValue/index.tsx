import React, { useContext } from "react";
import { CartContext } from "../../providers/cartContext";
import { Button } from "../Button";
import { StyledTotal } from "./style";

export const TotalValueCart = () => {
  const { clearCart, getTotalPrice } = useContext(CartContext);
  return (
    <StyledTotal>
      <div>
        <p>Total:</p>
        <span>R$ {getTotalPrice()}</span>
      </div>
      <Button
        buttonVariation={"clearCart"}
        type={"button"}
        onClick={() => clearCart()}
      >
        Remover todos
      </Button>
    </StyledTotal>
  );
};
