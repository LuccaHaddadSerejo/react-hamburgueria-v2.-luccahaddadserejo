import React, { useState, ChangeEvent } from "react";
import { createContext } from "react";
import { iListProduct, iMainContextProps, iMainContextValue } from "./types";

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

  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
    setFilterState(false);
  };

  const createFilter = () => {
    searchValue === "" ? emptyFilter() : filledFilter();
  };

  const createFilterMobile = () => {
    searchValue === "" ? emptyFilter() : filledFilter();
    setIsFilterOpen(false);
  };

  const openFilter = () => {
    setIsFilterOpen(true);
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
        createFilter,
        createFilterMobile,
        openFilter,
        isFilterOpen,
      }}
    >
      {children}
    </MainListContext.Provider>
  );
};
