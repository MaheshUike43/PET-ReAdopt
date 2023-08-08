import { createContext, useReducer } from "react";
import AdoptRequestReducer from "./ARReducer";

const INITIAL_STATE = {
  arequests: [],
  isFetching: false,
  error: false,
};

export const ARequestContext = createContext(INITIAL_STATE);

export const ARequestContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdoptRequestReducer, INITIAL_STATE);

  return (
    <ARequestContext.Provider
      value={{
        arequests: state.arequests,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ARequestContext.Provider>
  );
};