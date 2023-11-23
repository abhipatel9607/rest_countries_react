import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./ThemeContext.jsx";
import { RouterProvider } from "react-router-dom";
import appRouter from "./Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={appRouter} />
		</ThemeProvider>
	</React.StrictMode>
);
