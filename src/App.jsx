import { useEffect } from "react";
import Header from "./components/Header";
import { useTheme } from "./ThemeContext";
import themeColors from "./data/themeColors";
import { Outlet } from "react-router-dom";

function App() {
	const { theme, toggleTheme } = useTheme();

	useEffect(() => {
		const root = document.documentElement;
		Object.entries(themeColors[theme]).forEach(([property, value]) => {
			root.style.setProperty(property, value);
		});
	}, [theme]);

	return (
		<div>
			<Header theme={theme} toggleTheme={toggleTheme} />
			<Outlet />
		</div>
	);
}

export default App;
