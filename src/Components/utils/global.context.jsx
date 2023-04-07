import { createContext, useContext, useEffect, useReducer, useMemo } from "react";

export const initialState = { theme: "light", user: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users/";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_USER", payload: data }));
  }, []);

  const data = useMemo(() => {
    return {
      user: state.user,
      setUser: (data) => dispatch({ type: "SET_USER", payload: data }),
      theme: state.theme,
      toggleTheme: () => dispatch({ type: "TOGGLE_THEME" }),
    };
  }, [state]);

  return (
    <ContextGlobal.Provider value={data}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useUserStates = () => useContext(ContextGlobal);