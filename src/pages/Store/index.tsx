import React, { useEffect } from "react";
import { useContext } from "react";
import { Button } from "../../components/Button";
import { CartFull } from "../../components/Cart";
import { MainListCard } from "../../components/MainCard";
import Header from "../../components/StoreHeader";
import { CartContext } from "../../providers/cartContext";
import { MainListContext } from "../../providers/mainListContext";
import { UserContext } from "../../providers/userContext";
import { api } from "../../services/api";

const StorePage = () => {
  const { logout, setGlobalLoading } = useContext(UserContext);
  const {
    mainProductsList,
    filterState,
    searchValue,
    clearFilter,
    setMainProductsList,
    setFilteredProducts,
  } = useContext(MainListContext);
  const { getTotalPrice } = useContext(CartContext);

  useEffect(() => {
    (async () => {
      const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
      try {
        setGlobalLoading(true);
        const response = await api.get(`/products`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMainProductsList(() => [...response.data]);
        setFilteredProducts(() => [...response.data]);
      } catch (error) {
      } finally {
        setGlobalLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <Button type="button" onClick={() => logout()}>
        Sair
      </Button>
      {filterState === true && (
        <div>
          <div>
            <h2>Resultados para:</h2>
            <p>{searchValue}</p>
          </div>
          <button onClick={() => clearFilter()}>Limpar Busca</button>
        </div>
      )}
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
