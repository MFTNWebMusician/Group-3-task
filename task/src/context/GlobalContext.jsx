import { createContext, useContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  return <MyContext.Provider value={[]}>{children}</MyContext.Provider>;
};
