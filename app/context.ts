import { createContext, useContext } from "react";
import { ContextType } from "../types/types";

const AppContext = createContext<ContextType | null>(null);

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext };
export default useGlobalContext;
