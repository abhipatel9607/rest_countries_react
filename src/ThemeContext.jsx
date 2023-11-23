/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
	return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
