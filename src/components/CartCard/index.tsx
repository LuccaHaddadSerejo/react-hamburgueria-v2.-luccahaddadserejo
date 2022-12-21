import { useContext } from "react";
import { CartContext } from "../../providers/cartContext";
import trashIcon from "../../assets/img/trash-icon.svg";
import { StyledCartCard } from "./style";
import { Button } from "../Button";
import { iListProduct } from "../../providers/mainListContext/types";

export const CartCard = ({ id, name, price, img, counter }: iListProduct) => {
  const { removeItemFromCart, addCounter, subtractCounter } =
    useContext(CartContext);

  return (
    <StyledCartCard id={id + ""}>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <div>
          <h2>{name}</h2>
          <Button type="button" onClick={() => removeItemFromCart(id)}>
            <img src={trashIcon} alt={"Trash Icon"} />
          </Button>
        </div>
        <div>
          <p>R$ {price * counter}</p>
          <div>
            <Button
              onClick={() => subtractCounter(id)}
              buttonVariation="addAndSubtractCart"
              type="button"
            >
              -
            </Button>
            <div>
              <span>{counter}</span>
            </div>
            <Button
              onClick={() => addCounter(id)}
              buttonVariation="addAndSubtractCart"
              type="button"
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </StyledCartCard>
  );
};
