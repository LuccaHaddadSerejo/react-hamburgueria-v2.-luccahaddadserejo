import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../../services/api";
import { UserContext } from "../userContext";

export interface iMainContextProps {
  children: React.ReactNode;
}

export interface iListProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  counter?: number;
}

export interface iMainContextValue {
  mainProductsList: iListProduct[];
}

export const MainListContext = createContext({} as iMainContextValue);

export const MainListProvider = ({ children }: iMainContextProps) => {
  const { setGlobalLoading } = useContext(UserContext);
  const [mainProductsList, setMainProductsList] = useState(
    [] as iListProduct[]
  );

  useEffect(() => {
    (async () => {
      const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
      try {
        setGlobalLoading(true);
        const response = await api.get(`/products`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMainProductsList(() => [...response.data]);
      } catch (error) {
      } finally {
        setGlobalLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainListContext.Provider value={{ mainProductsList }}>
      {children}
    </MainListContext.Provider>
  );
};
