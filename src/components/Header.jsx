// eslint-disable-next-line react/prop-types
function Header({ theme, toggleTheme }) {
	return (
		<div className="header">
			<div className="container head-container">
				<h1>Where in the world?</h1>
				<button className="theme-btn" onClick={toggleTheme}>
					{theme == "light" ? "Light Mode" : "Dark Mode"}
				</button>
			</div>
		</div>
	);
}

export default Header;
