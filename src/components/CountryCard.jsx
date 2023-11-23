/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function CountryCard(props) {
	// eslint-disable-next-line react/prop-types
	const { flags, name, population, region, capital } = props.country;
	return (
		<>
			<Link to={`/country/${name.common}`} style={{ textDecoration: "none" }}>
				<div className="countryCard">
					<img src={flags.svg} alt="Flag" />
					<div className="countryCardDetail">
						<h3>{name.common}</h3>
						<p>
							Population: <span>{population}</span>
						</p>
						<p>
							Region: <span>{region}</span>
						</p>
						<p>
							Capital: <span>{capital}</span>
						</p>
					</div>
				</div>
			</Link>
		</>
	);
}

export default CountryCard;
