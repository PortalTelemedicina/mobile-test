import React, {useContext, useState} from 'react';

const ThemeContext = React.createContext({
  darkMode: false,
  // @ts-ignore:next-line
  toggleTheme: (value: boolean) => {},
});

export const ThemeContextProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = (value: boolean) => {
    setDarkMode(value);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useAppTheme() {
  const context = useContext(ThemeContext);
  return context;
}

export default ThemeContext;
