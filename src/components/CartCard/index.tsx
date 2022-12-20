import { useContext } from "react";
import { CartContext } from "../../providers/cartContext";
import { iListProduct } from "../../providers/mainListContext";
import trashIcon from "../../assets/img/trash-icon.svg";
import { StyledCartCard } from "./style";
import { Button } from "../Button";

export const CartCard = ({ id, name, price, img }: iListProduct) => {
  const { removeItemFromCart } = useContext(CartContext);
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
          <p>R$ {price.toFixed(2)}</p>
          <div>
            <Button buttonVariation="addAndSubtractCart" type="button">
              -
            </Button>
            <div>
              <span>1</span>
            </div>
            <Button buttonVariation="addAndSubtractCart" type="button">
              +
            </Button>
          </div>
        </div>
      </div>
    </StyledCartCard>
  );
};
