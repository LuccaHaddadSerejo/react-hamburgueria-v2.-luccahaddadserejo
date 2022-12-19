import React from "react";
import logo from "../../assets/img/Logo.svg";
import shoppingBag from "../../assets/img/shopping-bag.svg";
import { StyledAsideContainer } from "./style";

export const AsideLoginRegister = () => {
  return (
    <StyledAsideContainer>
      <img src={logo} alt="KenzieBurger Logo" />
      <div>
        <div>
          <img src={shoppingBag} alt="shoppingBagIcon" />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os
          <strong> melhores</strong> ingredientes.
        </p>
      </div>
    </StyledAsideContainer>
  );
};
