import { createContext, useReducer } from "react";
import PetReducer from "./PetReducer";

const INITIAL_STATE = {
  pets: [],
  isFetching: false,
  error: false,
};

export const PetContext = createContext(INITIAL_STATE);

export const PetContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PetReducer, INITIAL_STATE);

  return (
    <PetContext.Provider
      value={{
        pets: state.pets,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};