import React from "react";
import { useContext } from "react";
import { Button } from "../../components/Button";
import { UserContext } from "../../providers/userContext";

const StorePage = () => {
  const { logout } = useContext(UserContext);
  return (
    <div>
      <h1>StorePage</h1>
      <Button type="button" onClick={() => logout()}>
        Sair
      </Button>
    </div>
  );
};

export default StorePage;
