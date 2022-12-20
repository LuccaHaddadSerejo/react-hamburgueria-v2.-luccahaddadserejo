import React, { useContext } from "react";
import logo from "../../assets/img/Logo.svg";
import cartIcon from "../../assets/img/cart-icon.svg";
import magnifyingGlassSmall from "../../assets/img/magnifying-glass-small.svg";
import logoutIcon from "../../assets/img/logout.svg";
import { CartContext } from "../../providers/cartContext";
import { MainListContext } from "../../providers/mainListContext";
import { UserContext } from "../../providers/userContext";
import { Input } from "../Input";
import { StyledBackground, StyledHeader, StyledNav } from "./style";
import { Button } from "../Button";

const Header = () => {
  const { searchValue, emptyFilter, filledFilter, handleChangeSearch } =
    useContext(MainListContext);
  const { logout } = useContext(UserContext);
  const { openCart, cartProducts } = useContext(CartContext);

  const createFilter = () => {
    searchValue === "" ? emptyFilter() : filledFilter();
  };

  return (
    <StyledBackground>
      <StyledHeader>
        <img src={logo} alt="Logo Burguer Kenzie" />
        <StyledNav>
          <div>
            <Input
              inputVariation={"search"}
              id={"headerInput"}
              type={"text"}
              placeholder="Pesquisar"
              value={searchValue}
              onChange={handleChangeSearch}
            />

            <Button type="button" onClick={() => createFilter()}>
              <img
                src={magnifyingGlassSmall}
                alt="magnifying-glass-small Icon"
              />
            </Button>
          </div>
          <div>
            <Button type={"button"} onClick={() => openCart()}>
              <img src={cartIcon} alt="Cart Icon" />
            </Button>
            <div>
              <span>{cartProducts.length}</span>
            </div>
          </div>
          <Button type="button" onClick={() => logout()}>
            <img src={logoutIcon} alt="Logout Icon" />
          </Button>
        </StyledNav>
      </StyledHeader>
    </StyledBackground>
  );
};

export default Header;
