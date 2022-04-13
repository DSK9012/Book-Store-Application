/* Copyright © Bankers Healthcare Group, Inc.  All rights reserved. */

import { createContext, useContext } from 'react';
import booksStore, { booksStoreInitialState } from 'store/BooksStore';

const initialStore = {
  booksContext: booksStoreInitialState,
};

export const StoreContext = createContext(initialStore);

export function Store({ children }) {
  const booksContext = booksStore();

  return <StoreContext.Provider value={{ booksContext }}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);
