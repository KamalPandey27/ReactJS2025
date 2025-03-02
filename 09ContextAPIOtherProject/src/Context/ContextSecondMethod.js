import { createContext, useContext } from "react";

export const ContextSecondMethod = createContext();
export const ContextSecondMethodProvider = ContextSecondMethod.Provider;

export default function useContextMethod() {
  return useContext(ContextSecondMethod);
}
