import React, { SetStateAction, ChangeEvent } from "react";

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
  createFilter: () => void;
  createFilterMobile: () => void;
  openFilter: () => void;
  isFilterOpen: boolean;
}
