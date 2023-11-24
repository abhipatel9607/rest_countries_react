/** @format */

import { Link } from "react-router-dom";

function CountryCard(props) {
  // eslint-disable-next-line react/prop-types
  const { flags, name, population, region, capital } = props.country;
  // eslint-disable-next-line react/prop-types
  const countryName = name?.common;
  // eslint-disable-next-line react/prop-types
  const flag = flags?.svg;

  return (
    <>
      <Link to={`/country/${countryName}`} style={{ textDecoration: "none" }}>
        <div className="countryCard">
          <img src={flag} alt="Flag" />
          <div className="countryCardDetail">
            <h3>{countryName}</h3>
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
