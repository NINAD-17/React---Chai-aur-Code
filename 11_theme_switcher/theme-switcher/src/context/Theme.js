import { createContext, useContext } from "react";


// different approach to set default values of context
export const ThemeContext = createContext({
    themeMode: "light", 
    darkTheme: () => {},
    lightTheme: () => {},
});

// here, we've not created separate file for provider. we directly exported.
export const ThemeProvider = ThemeContext.Provider;

// custom hooks
export default function useTheme() {
    return useContext(ThemeContext);
}