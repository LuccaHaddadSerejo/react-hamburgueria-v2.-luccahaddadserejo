import { useContext } from "react";
import { CartContext } from "../../providers/cartContext";
import { iListProduct } from "../../providers/mainListContext";

export const CartCard = ({ id, name, category, price, img }: iListProduct) => {
  const { removeItemFromCart } = useContext(CartContext);
  return (
    <li id={id + ""}>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <div>
          <h2>{name}</h2>
          <p>{category}</p>
          <div>
            <button>-</button>
            <button>+</button>
          </div>
          <p hidden>{price}</p>
          <button onClick={() => removeItemFromCart(id)}>Remover</button>
        </div>
      </div>
    </li>
  );
};
