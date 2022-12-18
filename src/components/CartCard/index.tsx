import { useContext } from "react";
import { CartContext } from "../../providers/cartContext";
import { iListProduct } from "../../providers/mainListContext";

export const CartCard = ({
  id,
  name,
  category,
  price,
  img,
  counter,
}: iListProduct) => {
  const { removeItemFromCart, addToCount, removeFromCount } =
    useContext(CartContext);
  return (
    <li id={id + ""}>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <div>
          <h2>{name}</h2>
          <p>{category}</p>
          <p>{counter}</p>
          <div>
            <button onClick={() => removeFromCount(id)}>-</button>
            <button onClick={() => addToCount(id)}>+</button>
          </div>
          <p hidden>{counter ? price * counter : price}</p>
          <button onClick={() => removeItemFromCart(id)}>Remover</button>
        </div>
      </div>
    </li>
  );
};
