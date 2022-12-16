import React from "react";
import { UserProvider } from "./providers/userContext";
import { RoutesMain as Routes } from "./routes";

function App() {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
