import Error from "./components/Error";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AppContent from "./components/AppContent";
import Country from "./components/Country";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <AppContent /> },
			{ path: "/country/:country", element: <Country /> },
		],
		errorElement: <Error />,
	},
]);

export default appRouter;
