import React, { useContext } from "react";
import logo from "../../assets/img/Logo.svg";
import { MainListContext } from "../../providers/mainListContext";
import { Input } from "../Input";

const Header = () => {
  const { searchValue, emptyFilter, filledFilter, handleChangeSearch } =
    useContext(MainListContext);

  const createFilter = () => {
    searchValue === "" ? emptyFilter() : filledFilter();
  };

  return (
    <div>
      <div>
        <img src={logo} alt="Logo Burguer Kenzie" />
        <Input
          id={"headerInput"}
          type={"text"}
          placeholder="Pesquisar"
          value={searchValue}
          onChange={handleChangeSearch}
        />
        <button onClick={() => createFilter()}>Pesquisar</button>
      </div>
    </div>
  );
};

export default Header;
