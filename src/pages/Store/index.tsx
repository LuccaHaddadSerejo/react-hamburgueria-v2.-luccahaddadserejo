import React, { useEffect } from "react";
import { useContext } from "react";
import { Button } from "../../components/Button";
import { CartFull } from "../../components/Cart";
import { MainListCard } from "../../components/MainCard";
import Header from "../../components/StoreHeader";
import { CartContext } from "../../providers/cartContext";
import { iListProduct, MainListContext } from "../../providers/mainListContext";
import { UserContext } from "../../providers/userContext";
import { api } from "../../services/api";
import { StyledFilterDiv, StyledMainList, StyledSection } from "./style";

const StorePage = () => {
  const { setGlobalLoading } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const {
    mainProductsList,
    filterState,
    searchValue,
    clearFilter,
    setMainProductsList,
    setFilteredProducts,
  } = useContext(MainListContext);

  useEffect(() => {
    (async () => {
      const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
      try {
        setGlobalLoading(true);
        const response = await api.get(`/products`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const newData = response.data.map((product: iListProduct) => {
          return {
            ...product,
            counter: 1,
          };
        });
        setMainProductsList(() => [...newData]);
        setFilteredProducts(() => [...newData]);
      } catch (error) {
      } finally {
        setGlobalLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      {isCartOpen && <CartFull />}
      <StyledSection>
        {filterState && (
          <StyledFilterDiv>
            <div>
              <h2>Resultados para:</h2>
              <p>{searchValue}</p>
            </div>
            <Button
              type="button"
              buttonVariation="clearFilter"
              onClick={() => clearFilter()}
            >
              Limpar Busca
            </Button>
          </StyledFilterDiv>
        )}
        <StyledMainList>
          {mainProductsList.map((product) => {
            return (
              <MainListCard
                counter={product.counter}
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                img={product.img}
              />
            );
          })}
        </StyledMainList>
      </StyledSection>
    </>
  );
};

export default StorePage;
