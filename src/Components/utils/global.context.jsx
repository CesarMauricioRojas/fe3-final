import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo
} from "react";

export const initialState = { theme: ["light", "dark"], user: [] };

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [user, setUser] = useState([]);
  const [theme, setTheme] = useState(initialState.theme);
  const url = "https://jsonplaceholder.typicode.com/users/";

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  const data = useMemo(() => {
    return {
      user,
      setUser,
      theme,
      toggleTheme,
    };
  }, [user, setUser, theme, toggleTheme]);

  return (
    <ContextGlobal.Provider value={data}>
      {children}
    </ContextGlobal.Provider>
  );
};
export const useUserStates = () => useContext(ContextGlobal);
