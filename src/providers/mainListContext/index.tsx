import React, { useState, SetStateAction, ChangeEvent } from "react";
import { createContext } from "react";

export interface iMainContextProps {
  children: React.ReactNode;
}

export interface iListProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  counter: number;
}

export interface iMainContextValue {
  mainProductsList: iListProduct[];
  setMainProductsList: React.Dispatch<SetStateAction<iListProduct[]>>;
  setFilteredProducts: React.Dispatch<SetStateAction<iListProduct[]>>;
  setFilterState: React.Dispatch<SetStateAction<boolean>>;
  searchValue: string;
  filterState: boolean;
  handleChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  emptyFilter: () => void;
  filledFilter: () => void;
  clearFilter: () => void;
}

export const MainListContext = createContext({} as iMainContextValue);

export const MainListProvider = ({ children }: iMainContextProps) => {
  const [mainProductsList, setMainProductsList] = useState(
    [] as iListProduct[]
  );
  const [filteredProducts, setFilteredProducts] = useState(
    [] as iListProduct[]
  );

  const [filterState, setFilterState] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const emptyFilter = () => {
    setMainProductsList(filteredProducts);
    setFilterState(false);
  };

  const filledFilter = () => {
    const filteredList = filteredProducts.filter(
      (elt) =>
        elt.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        elt.category.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchValue(searchValue);
    setFilterState(true);
    setMainProductsList(filteredList);
  };

  const clearFilter = () => {
    setMainProductsList(filteredProducts);
    setFilterState(false);
    setSearchValue("");
  };

  return (
    <MainListContext.Provider
      value={{
        mainProductsList,
        setMainProductsList,
        setFilteredProducts,
        setFilterState,
        searchValue,
        filterState,
        handleChangeSearch,
        emptyFilter,
        filledFilter,
        clearFilter,
      }}
    >
      {children}
    </MainListContext.Provider>
  );
};
