import { createContext, useContext, useReducer } from "react";
import globalReducer from "@/reducers/global-reducer";
import initialState from "./init";

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

const StateContext = createContext({});
const DispatchContext = createContext({});

const useProductInfo = () => {
  return useContext(StateContext);
};

const useDispatch = () => {
  return useContext(DispatchContext);
};

export { useProductInfo, useDispatch };

export default StateProvider;
