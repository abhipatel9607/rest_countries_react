/* eslint-disable react/prop-types */
import CountryCard from "./CountryCard";

function Countries({ countries }) {
	return (
		<div className="countries-container">
			{countries.map((country, i) => (
				<CountryCard key={i + 1} country={country} />
			))}
		</div>
	);
}

export default Countries;
