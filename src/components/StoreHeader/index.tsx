import React, { useContext } from "react";
import logo from "../../assets/img/Logo.svg";
import { CartContext } from "../../providers/cartContext";
import { MainListContext } from "../../providers/mainListContext";
import { UserContext } from "../../providers/userContext";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledBackground, StyledHeader } from "./style";

const Header = () => {
  const { searchValue, emptyFilter, filledFilter, handleChangeSearch } =
    useContext(MainListContext);
  const { logout } = useContext(UserContext);
  const { openCart } = useContext(CartContext);

  const createFilter = () => {
    searchValue === "" ? emptyFilter() : filledFilter();
  };

  return (
    <StyledBackground>
      <StyledHeader>
        <img src={logo} alt="Logo Burguer Kenzie" />
        <div>
          <Input
            id={"headerInput"}
            type={"text"}
            placeholder="Pesquisar"
            value={searchValue}
            onChange={handleChangeSearch}
          />
          <button onClick={() => createFilter()}>Pesquisar</button>
          <button onClick={() => openCart()}>Carrinho</button>
          <Button type="button" onClick={() => logout()}>
            Sair
          </Button>
        </div>
      </StyledHeader>
    </StyledBackground>
  );
};

export default Header;
