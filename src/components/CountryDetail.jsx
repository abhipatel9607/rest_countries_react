/** @format */

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Country() {
  const [country, setCountry] = useState({});
  const params = useParams();

  const native = country.name ? Object.values(country.name.nativeName) : [];
  const nativeName = native.length > 0 ? native[0].common : "No Native Name";
  const currencies = country.currencies
    ? Object.keys(country.currencies).join(", ")
    : "";
  const language = country.languages
    ? Object.values(country?.languages).join(", ")
    : "";

  useEffect(
    () => {
      fetch("https://restcountries.com/v3.1/all")
        .then((countriesResponse) => countriesResponse.json())
        .then((countriesData) => {
          const filteredCountry = countriesData.find(
            (country) => country.cca3 === params.country
          );
          setCountry(filteredCountry);
        })
        .catch((err) => console.error(err.message));
    },
    [params.country],
    country
  );

  return (
    <div className="container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="btn-box">
          <span>&larr;</span>
          <button> Back</button>
        </div>
      </Link>
      <div className="country-box">
        <img src={`${country?.flags?.svg}`} alt="Flag" />
        <div className="country-detail-box">
          <h2>{country?.name?.common}</h2>
          <div className="country-description">
            <div className="primary-details">
              <p>
                Native Name: <span>{nativeName}</span>
              </p>
              <p>
                Population: <span>{country?.population}</span>
              </p>
              <p>
                Region: <span>{country?.region}</span>
              </p>
              <p>
                Sub Region: <span>{country?.subregion}</span>
              </p>
              <p>
                Capital: <span>{country?.capital}</span>
              </p>
            </div>
            <div className="secondary-details">
              <p>
                Top Level Domain: <span>{country?.tld}</span>
              </p>
              <p>
                Currencies: <span>{currencies}</span>
              </p>
              <p>
                Language: <span>{language}</span>
              </p>
            </div>
          </div>
          {country.borders && (
            <p className="border-countries">
              Border Countries:
              {country.borders.map((country, i) => (
                <Link to={`/country/${country}`} key={i + 1}>
                  <button className="border">{country} </button>
                </Link>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Country;
