import React from "react";
import { CartProvider } from "./providers/cartContext";
import { MainListProvider } from "./providers/mainListContext";
import { UserProvider } from "./providers/userContext";
import { RoutesMain as Routes } from "./routes";
import Global from "./styles/global";

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <MainListProvider>
          <CartProvider>
            <Routes />
          </CartProvider>
        </MainListProvider>
      </UserProvider>
    </>
  );
}

export default App;
