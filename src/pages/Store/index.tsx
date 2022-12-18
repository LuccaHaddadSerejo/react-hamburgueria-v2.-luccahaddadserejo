import React from "react";
import { useContext } from "react";
import { Button } from "../../components/Button";
import { CartFull } from "../../components/Cart";
import { MainListCard } from "../../components/MainCard";
import { CartContext } from "../../providers/cartContext";
import { MainListContext } from "../../providers/mainListContext";
import { UserContext } from "../../providers/userContext";

const StorePage = () => {
  const { logout } = useContext(UserContext);
  const { mainProductsList } = useContext(MainListContext);
  const { getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <h1>StorePage</h1>
      <Button type="button" onClick={() => logout()}>
        Sair
      </Button>
      <ul>
        {mainProductsList.map((product) => {
          return (
            <MainListCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              img={product.img}
            />
          );
        })}
      </ul>
      <ul>
        <CartFull />
      </ul>
      <p>{getTotalPrice()}</p>
    </div>
  );
};

export default StorePage;
