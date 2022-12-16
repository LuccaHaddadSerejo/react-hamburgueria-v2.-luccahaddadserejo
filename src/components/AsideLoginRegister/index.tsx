import React from "react";
import logo from "../../assets/img/Logo.svg";
import shoppingBag from "../../assets/img/shopping-bag.svg";

export const AsideLoginRegister = () => {
  return (
    <div>
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
    </div>
  );
};
